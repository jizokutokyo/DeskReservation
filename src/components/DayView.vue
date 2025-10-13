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
          <!-- First row: day names -->
          <tr>
            <th rowspan="2">Desk</th>
            <th v-for="day in weekDays" :key="day" colspan="2">
              {{ formatDay(day) }}
            </th>
          </tr>
          <!-- Second row: AM / PM -->
          <tr>
            <th v-for="day in weekDays" :key="day + '-am'">AM</th>
            <th v-for="day in weekDays" :key="day + '-pm'">PM</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="desk in desks" :key="desk">
            <td class="desk-name">Desk {{ desk }}</td>

            <!-- AM cells -->
            <td
              v-for="day in weekDays"
              :key="`${desk}-${day}-am`"
              class="slot"
              :class="{ reserved: isReserved(desk, day, 'am') }"
              @click="handleSlotClick(desk, day, 'am')"
            >
              {{ getReservationName(desk, day, 'am') || 'Free' }}
            </td>

            <!-- PM cells -->
            <td
              v-for="day in weekDays"
              :key="`${desk}-${day}-pm`"
              class="slot"
              :class="{ reserved: isReserved(desk, day, 'pm') }"
              @click="handleSlotClick(desk, day, 'pm')"
            >
              {{ getReservationName(desk, day, 'pm') || 'Free' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

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
import { ref, watch, onMounted } from "vue";
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
    const desks = Array.from({ length: 10 }, (_, i) => i +_
