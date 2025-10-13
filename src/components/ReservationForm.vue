<template>
  <div class="reservation-form">
    <form @submit.prevent="submitReservation">
      <div class="form-row">
        <div class="form-field">
          <label>Name:</label>
          <input v-model="userName" placeholder="Enter your name" required />
        </div>

        <div class="form-field">
          <label>Desk:</label>
          <select v-model="deskId" required>
            <option v-for="n in 10" :key="n" :value="n">Desk {{ n }}</option>
          </select>
        </div>

        <div class="form-field">
          <label>Date:</label>
          <input type="date" v-model="date" required />
        </div>

        <div class="form-field">
          <label>Time:</label>
          <select v-model="period" required>
            <option disabled value="">Select period</option>
            <option value="am">AM</option>
            <option value="pm">PM</option>
          </select>
        </div>

        <button type="submit" class="submit-btn">Reserve</button>
      </div>
    </form>
  </div>
</template>

<script>
import { collection, addDoc, getDocs, query, where, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default {
  data() {
    return {
      userName: "",
      deskId: 1,
      date: "",
      period: "",
    };
  },
  methods: {
    async submitReservation() {
      if (!this.userName || !this.date || !this.period) {
        alert("Please fill in all fields.");
        return;
      }

      localStorage.setItem("userName", this.userName);

      // Check for conflicts
      const q = query(
        collection(db, "reservations"),
        where("deskId", "==", this.deskId),
        where("date", "==", this.date),
        where("period", "==", this.period)
      );
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        alert("This slot is already reserved. Please choose another period.");
        return;
      }

      // Add reservation
      await addDoc(collection(db, "reservations"), {
        deskId: this.deskId,
        userName: this.userName,
        date: this.date,
        period: this.period,
      });

      // Add log
      await addDoc(collection(db, "logs"), {
        action: "created",
        userName: this.userName,
        deskId: this.deskId,
        date: this.date,
        period: this.period,
        timestamp: serverTimestamp(),
      });

      this.userName = "";
      this.deskId = 1;
      this.date = "";
      this.period = "";
      this.$emit("reservation-added");
    },
  },
};
</script>

<style scoped>
.reservation-form {
  width: 100%;
  max-width: 1100px;
  margin: 10px auto 0;
  padding: 16px 24px;
  border-radius: 12px;
  background-color: #fafafa;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.form-field {
  display: flex;
  flex-direction: column;
  min-width: 150px;
  flex: 1;
}

label {
  font-weight: 500;
  font-size: 0.9rem;
  margin-bottom: 4px;
}

input,
select {
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
  background-color: #fff;
}

input:focus,
select:focus {
  outline: none;
  border-color: #007aff;
  box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.15);
}

.submit-btn {
  padding: 10px 20px;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-btn:hover {
  background-color: #0062d6;
}

@media (max-width: 900px) {
  .form-row {
    flex-direction: column;
  }
}
</style>
