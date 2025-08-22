<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['navigate'])

// State for the countdown timer, initially set to 5 hours and 23 minutes
const timeRemaining = ref(5 * 3600 + 23 * 60);

// Helper function to format the remaining time into hours and minutes
const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  // Pad single-digit numbers with a leading zero
  const formattedHours = String(hours).padStart(1, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  return `${formattedHours}h ${formattedMinutes}m`;
};

// Calculate the progress of the countdown for the ring animation
const initialTime = 5 * 3600 + 23 * 60;
const progress = ref((timeRemaining.value / initialTime) * 100);

let interval = null;

const navigate = (page) => {
    emit('navigate', page)
}

onMounted(() => {
  // Set up the interval to decrement the time remaining
  interval = setInterval(() => {
    if (timeRemaining.value <= 0) {
      clearInterval(interval);
      timeRemaining.value = 0;
    } else {
      timeRemaining.value -= 1;
      progress.value = (timeRemaining.value / initialTime) * 100;
    }
  }, 1000);
});

onUnmounted(() => {
  // Clean up the interval when the component unmounts
  clearInterval(interval);
});
</script>

<template>
    <!-- Container for the promo card -->
    <div class="relative w-full mx-auto rounded-[2rem] p-4 md:p-6 overflow-hidden bg-gradient-to-br from-green-500 to-green-700 text-white">
      
      <!-- Hexagon pattern background (simple placeholder) -->
      <div 
        class="absolute inset-0 z-0 opacity-20" 
        style="background-image: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M50 0L100 25L100 75L50 100L0 75L0 25Z\' stroke=\'%23ffffff\' stroke-width=\'2\' fill=\'none\'%3E%3C/path%3E%3C/svg%3E'); background-size: 25px 25px; background-repeat: repeat;"
      ></div>

      <div class="relative z-10 flex flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
        
        <!-- Left section with win amount and button -->
        <div class="flex-1 text-left">
          <h2 class="text-base md:text-xl font-light mb-1">Win everyday</h2>
          <p class="text-3xl md:text-5xl font-bold mb-2! drop-shadow-lg">€100</p>
          <button class="bg-gradient-to-br from-gray-200 to-gray-400 text-gray-800 font-semibold md:py-2 px-4 md:px-8 rounded-full shadow-lg transition-transform transform hover:scale-105" @click="navigate('add-fund')">
            Add Fund
        </button>
        </div>
        <span class="inline md:hidden text-xs pe-px">Next Promo in</span>
        <!-- Right section with countdown timer -->
        <div class="flex-shrink-0 relative w-20 h-20 md:w-36 md:h-36">
          <!-- The outer circular border for the progress bar -->
          <div 
            class="absolute inset-0 rounded-full border-[8px] border-white"
            :style="{
              border: '8px solid white',
              borderTopColor: 'transparent',
              borderLeftColor: 'transparent',
              transform: 'rotate(' + (360 - progress * 3.6) + 'deg)'
            }"
          ></div>
          <!-- The inner circle with the text -->
          
          <div class="absolute inset-1 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex flex-col items-center justify-center p-2">
            <span class="hidden md:inline md:text-sm font-light md:uppercase">Next Promo in</span>
            <span class="text-xs md:text-xl font-bold">{{ formatTime(timeRemaining) }}</span>
          </div>
        </div>
      </div>
    </div>
</template>
