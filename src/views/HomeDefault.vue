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
  padding: 10px 24px 20px 24px; /* reduced top padding */
  background-color: #f5f5f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px; /* minimal space between title and form */
  min-height: 100vh;
}

h1 {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: #1c1c1e;
  margin: 6px 0 8px 0; /* reduced default top/bottom margin */
}

@media (max-width: 900px) {
  .home {
    padding: 12px;
    gap: 4px;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 6px;
  }
}
</style>
