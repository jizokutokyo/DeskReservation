<template>
  <div class="reservation-form">
    <form @submit.prevent="submitReservation">
      <div class="form-row">
        <div class="form-field">
          <label>Name:</label>
          <input v-model="userName" required />
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
          <label>Period:</label>
          <select v-model="period" required>
            <option disabled value="">Select period</option>
            <option value="before">Before 1 PM</option>
            <option value="after">After 1 PM</option>
          </select>
        </div>

        <button type="submit">Reserve</button>
      </div>
    </form>
  </div>
</template>

<script>
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
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

      // Check for conflicts
      const q = query(
        collection(db, "reservations"),
        where("deskId", "==", this.deskId),
        where("date", "==", this.date),
        where("period", "==", this.period)
      );
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        alert("This slot is already reserved. Please choose another time period.");
        return;
      }

      await addDoc(collection(db, "reservations"), {
        deskId: this.deskId,
        userName: this.userName,
        date: this.date,
        period: this.period,
      });

      // Reset form
      this.userName = "";
      this.deskId = 1;
      this.date = "";
      this.period = "";

      // Notify parent to refresh
      this.$emit("reservation-added");
    },
  },
};
</script>

<style>
.reservation-form {
  width: 1200px;
  margin: 40px auto;
  padding: 24px 32px;
  border-radius: 18px;
  background-color: #fafafa;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #333;
  margin-bottom: 10px;
}

.reservation-form h3 {
  margin-bottom: 10px;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  color: #222;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-end;
  justify-content: center;
}

.form-field {
  display: flex;
  flex-direction: column;
  min-width: 140px;
  flex: 1;
}

.form-field label {
  font-weight: 500;
  font-size: 0.9rem;
  margin-bottom: 4px;
}

.form-field input,
.form-field select {
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 15px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-field input:focus,
.form-field select:focus {
  outline: none;
  border-color: #007aff;
  box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.2);
}

button {
  padding: 12px 24px;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  align-self: flex-end;
  transition: background-color 0.2s, transform 0.1s;
}

button:hover {
  background-color: #0062d6;
  transform: translateY(-1px);
}

@media (max-width: 900px) {
  .form-row {
    flex-direction: column;
    align-items: stretch;
  }

  button {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
