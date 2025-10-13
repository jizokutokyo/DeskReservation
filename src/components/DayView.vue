<template>
  <div class="week-view">
    <h3>Weekly Desk Reservations</h3>

    <div class="date-picker">
      <label>Select week:</label>
      <input type="date" v-model="selectedDate" />
    </div>

    <div class="table-wrapper">
      <table>
        <thead>
          <!-- Row 1: Day names, each spans 2 columns -->
          <tr>
            <th rowspan="2" class="desk-col">Desk</th>
            <th v-for="day in weekDays" :key="day" colspan="2" class="day-group">
              {{ formatDay(day) }}
            </th>
          </tr>
          <!-- Row 2: For each day, render AM then PM (alternating) -->
          <tr>
            <template v-for="day in weekDays" :key="day + '-sub'">
              <th :key="day + '-am'" class="sub-col am">AM</th>
              <th :key="day + '-pm'" class="sub-col pm">PM</th>
            </template>
          </tr>
        </thead>

        <tbody>
          <tr v-for="desk in desks" :key="desk">
            <td class="desk-name">Desk {{ desk }}</td>

            <!-- For each day, render AM cell then PM cell (alternating) -->
            <template v-for="day in weekDays" :key="`${desk}-${day}-cells`">
              <td
                :key="`${desk}-${day}-am`"
                class="slot"
                :class="{ reserved: isReserved(desk, day, 'am') }"
                @click="handleSlotClick(desk, day, 'am')"
              >
                {{ getReservationName(desk, day, 'am') || 'Free' }}
              </td>
              <td
                :key="`${desk}-${day}-pm`"
                class="slot"
                :class="{ reserved: isReserved(desk, day, 'pm') }"
                @click="handleSlotClick(desk, day, 'pm')"
              >
                {{ getReservationName(desk, day, 'pm') || 'Free' }}
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Delete confirmation -->
    <div v-if="confirmPopover" class="confirm-popover">
      <p>
        Delete this reservation for
        <strong>{{ confirmPopover.reservation.userName }}</strong>?
      </p>
      <div class="buttons">
        <button @click="confirmDelete" class="delete">Yes</button>
        <button @click="confirmPopover = null" class="cancel">No</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import {
  collection,
  query,
  onSnapshot,
  deleteDoc,
  doc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

export default {
  setup() {
    const desks = Array.from({ length: 10 }, (_, i) => i + 1);
    const selectedDate = ref(new Date().toISOString().slice(0, 10));
    const reservations = ref([]);
    const confirmPopover = ref(null);

    // Monday of the selected week
    const getMonday = (dateStr) => {
      const date = new Date(dateStr);
      const day = date.getDay();
      const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Monday
      return new Date(date.setDate(diff));
    };

    // Mon–Fri list
    const getWeekDays = (dateStr) => {
      const monday = getMonday(dateStr);
      const days = [];
      for (let i = 0; i < 5; i++) {
        const d = new Date(monday);
        d.setDate(monday.getDate() + i);
        days.push(d.toISOString().slice(0, 10));
      }
      return days;
    };

    const weekDays = ref(getWeekDays(selectedDate.value));

    // Realtime reservations
    let unsubscribe = null;
    const fetchReservationsRealtime = () => {
      if (unsubscribe) unsubscribe();
      const q = query(collection(db, "reservations"));
      unsubscribe = onSnapshot(q, (snapshot) => {
        reservations.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    };

    onMounted(fetchReservationsRealtime);
    watch(selectedDate, (newDate) => {
      weekDays.value = getWeekDays(newDate);
    });

    const isReserved = (deskId, day, period) =>
      !!reservations.value.find(
        (r) => r.deskId === deskId && r.date === day && r.period === period
      );

    const getReservationName = (deskId, day, period) => {
      const res = reservations.value.find(
        (r) => r.deskId === deskId && r.date === day && r.period === period
      );
      return res ? res.userName : "";
    };

    const handleSlotClick = (deskId, day, period) => {
      const res = reservations.value.find(
        (r) => r.deskId === deskId && r.date === day && r.period === period
      );

      if (!res) return; // nothing to delete

      const currentUser = localStorage.getItem("userName");
      if (res.userName !== currentUser) {
        alert("You can only delete your own reservation.");
        return;
      }

      confirmPopover.value = { deskId, day, period, reservation: res };
    };

    const confirmDelete = async () => {
      if (!confirmPopover.value) return;
      const res = confirmPopover.value.reservation;
      await deleteDoc(doc(db, "reservations", res.id));
      await addDoc(collection(db, "logs"), {
        action: "deleted",
        userName: res.userName,
        deskId: res.deskId,
        date: res.date,
        period: res.period,
        timestamp: serverTimestamp(),
      });
      confirmPopover.value = null;
    };

    const formatDay = (dateStr) => {
      const d = new Date(dateStr);
      return d.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
    };

    return {
      desks,
      selectedDate,
      weekDays,
      reservations,
      isReserved,
      getReservationName,
      handleSlotClick,
      confirmPopover,
      confirmDelete,
      formatDay,
    };
  },
};
</script>

<style scoped>
.week-view {
  background-color: #fafafa;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #333;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto 30px;
}

h3 {
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 12px;
}

.date-picker {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.table-wrapper {
  overflow-x: auto;
  background-color: white;
  border-radius: 12px;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

th, td {
  border: 1px solid #e5e5ea;
  padding: 8px;
  vertical-align: middle;
}

th.day-group {
  background-color: #ededed;
}

th.sub-col.am { background-color: #fff8e1; } /* light warm for AM */
th.sub-col.pm { background-color: #e7f2ff; } /* light cool for PM */

.desk-col { min-width: 100px; }

.desk-name {
  font-weight: 600;
  background-color: #f9fafc;
}

.slot {
  border-radius: 6px;
  padding: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.slot:hover { background-color: #f0f8ff; }

.reserved {
  background-color: #007aff;
  color: white;
  font-weight: 600;
}

.confirm-popover {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 16px 22px;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 1000;
}

.confirm-popover .buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.confirm-popover .delete {
  background: #ff3b30;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
}

.confirm-popover .cancel {
  background: #ccc;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
}
</style>
