<template>
     <h2 class="text-white text-xl md:text-2xl font-bold mb-4 text-center">Recent Winners</h2>
     <!-- Winners list container with scrolling animation -->
    <div class="relative w-full h-full overflow-hidden rounded-xl">
      <ul class="absolute inset-0 list-none p-0 m-0 animate-scroll-up-slow" style="padding-top: 1rem;">
        <li v-for="(winner, index) in combinedWinners" :key="index" class="py-2 px-4 mb-2! rounded-lg bg-gray-900/10 text-white flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <!-- Winner Icon (using an emoji as a simple placeholder) -->
            <span class="text-2xl">🏆</span>
            <div>
              <p class="font-semibold text-lg">{{ winner.name }}</p>
              <p class="text-sm text-gray-300">from {{ winner.city }}</p>
            </div>
          </div>
          <div class="text-right">
            <p class="font-bold text-lg text-yellow-300">{{ winner.reward }}</p>
            <p class="text-xs text-gray-400">{{ winner.time }}</p>
          </div>
        </li>
      </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue';

// Dummy data for the winners list.
// I've used some Nigerian names and cities as a nod to the project blueprint.
const winners = ref([
  { name: 'Esther', city: 'Lagos', reward: 'N3,000 Cash', time: '1 min ago' },
  { name: 'Uche', city: 'Enugu', reward: '2.5GB MTN data', time: '2 mins ago' },
  { name: 'David', city: 'Abuja', reward: 'N100,000 STAR', time: '5 mins ago' },
  { name: 'Chidinma', city: 'Port Harcourt', reward: '500MB Data', time: '10 mins ago' },
  { name: 'Blessing', city: 'Ibadan', reward: 'N1,000 Cash', time: '15 mins ago' },
  { name: 'Mohammed', city: 'Kano', reward: '1GB Data', time: '20 mins ago' },
  { name: 'Adekunle', city: 'Ogun', reward: 'N500 Cash', time: '30 mins ago' },
  { name: 'Fatima', city: 'Kaduna', reward: '3.5GB Data', time: '45 mins ago' },
]);

// Duplicate the list to ensure a seamless looping animation
const combinedWinners = [...winners.value, ...winners.value];

</script>
<style scoped>
/*
 * Custom keyframe animation for a slow, continuous scroll.
 * The `calc()` function is used to dynamically calculate the scroll distance
 * based on the number of items.
 */
@keyframes scroll-up-slow {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-50%);
  }
}

.animate-scroll-up-slow {
  animation: scroll-up-slow 20s linear infinite;
}
</style>