<template>
  <div class="home">
    <h1>Jizoku: Nihonbashi desk reservation</h1>

    <ReservationForm @reservation-added="refreshDayView" />

    <DayView ref="dayView" />
  </div>
</template>

<script>
import ReservationForm from "../components/ReservationForm.vue";
import DayView from "../components/DayView.vue";

export default {
  components: { ReservationForm, DayView },
  methods: {
    refreshDayView() {
      if (this.$refs.dayView && this.$refs.dayView.fetchReservations) {
        this.$refs.dayView.fetchReservations();
      }
    },
  },
};
</script>

<style>
.home {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 24px; /* reduced top/bottom spacing */
  background-color: #f5f5f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px; /* reduced spacing between form and table */
  min-height: 100vh;
}

h1 {
  text-align: center;
  font-size: 1.9rem;
  font-weight: 700;
  color: #1c1c1e;
  margin: 0 0 10px 0; /* reduced bottom margin */
}

@media (max-width: 900px) {
  .home {
    padding: 16px 12px;
    gap: 6px;
  }

  h1 {
    font-size: 1.6rem;
  }
}
</style>
