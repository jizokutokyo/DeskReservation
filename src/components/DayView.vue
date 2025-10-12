<template>
  <div class="week-view">
    <h3>Weekly Desk Reservations</h3>

    <div class="date-picker">
      <label>Select week (start date):</label>
      <input type="date" v-model="weekStart" />
    </div>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Desk</th>
            <th v-for="day in weekDays" :key="day">{{ day }}</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(desk, index) in desks"
            :key="desk"
            :class="`desk-row desk-color-${index}`"
          >
            <td>Desk {{ desk }}</td>
            <td v-for="day in weekDays" :key="day" class="day-cell">
              <div class="period-container">
                <div
                  class="slot"
                  :class="{ reserved: isReserved(desk, day, 'before') }"
                  @click="openConfirmPopover(desk, day, 'before')"
                >
                  Before 1 PM
                  <span class="reservation-name">
                    {{ getReservationName(desk, day, 'before') }}
                  </span>
                </div>

                <div
                  class="slot"
                  :class="{ reserved: isReserved(desk, day, 'after') }"
                  @click="openConfirmPopover(desk, day, 'after')"
                >
                  After 1 PM
                  <span class="reservation-name">
                    {{ getReservationName(desk, day, 'after') }}
                  </span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- confirmation pop-up -->
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
import { collection, query, onSnapshot, deleteDoc, doc, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default {
  setup() {
    const desks = Array.from({ length: 10 }, (_, i) => i + 1);
    const weekStart = ref(new Date().toISOString().slice(0, 10));
    const reservations = ref([]);
    const confirmPopover = ref(null);

    // Get all days in the selected week
    const getWeekDays = (startDate) => {
      const start = new Date(startDate);
      const days = [];
      for (let i = 0; i < 7; i++) {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        days.push(d.toISOString().slice(0, 10));
      }
      return days;
    };

    const weekDays = ref(getWeekDays(weekStart.value));

    let unsubscribe = null;

    // Real-time Firestore subscription
    const fetchReservationsRealtime = () => {
      if (unsubscribe) unsubscribe();
      const q = query(collection(db, "reservations"));
      unsubscribe = onSnapshot(q, (snapshot) => {
        reservations.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    };

    onMounted(fetchReservationsRealtime);
    watch(weekStart, (newDate) => {
      weekDays.value = getWeekDays(newDate);
      fetchReservationsRealtime();
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

    // Open confirmation popup
    const openConfirmPopover = (deskId, day, period) => {
      const res = reservations.value.find(
        (r) => r.deskId === deskId && r.date === day && r.period === period
      );

      if (!res) return;

      const currentUser = localStorage.getItem("userName");
      if (res.userName !== currentUser) {
        alert("You can only delete your own reservation.");
        return;
      }

      confirmPopover.value = { deskId, day, period, reservation: res };
    };

    // Delete + log
    const confirmDelete = async () => {
      if (!confirmPopover.value) return;
      const res = confirmPopover.value.reservation;

      await deleteDoc(doc(db, "reservations", res.id));

      // ✅ Add log entry
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

    return {
      desks,
      weekStart,
      weekDays,
      reservations,
      isReserved,
      getReservationName,
      openConfirmPopover,
      confirmPopover,
      confirmDelete,
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
  max-width: 1200px;
  margin: 0 auto 30px;
}

h3 {
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 14px;
}

.date-picker {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}

.table-wrapper {
  overflow-x: auto;
  background-color: white;
  border-radius: 12px;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 900px;
  text-align: center;
}

th,
td {
  border: 1px solid #e5e5ea;
  padding: 8px;
  vertical-align: middle;
}

th {
  background-color: #f2f2f7;
  font-weight: 600;
}

.day-cell {
  padding: 4px;
}

.period-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
}

.slot {
  flex: 1;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 5px 0;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
}

.slot:hover {
  background-color: #f0f8ff;
  transform: scale(1.02);
}

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
  cursor: pointer;
}

.confirm-popover .cancel {
  background: #ccc;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
}
</style>
