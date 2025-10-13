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
      if (this.$refs.dayView?.fetchReservations) {
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
  padding: 10px 24px 20px;
  background-color: #f5f5f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

h1 {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: #1c1c1e;
  margin: 8px 0;
}
</style>
