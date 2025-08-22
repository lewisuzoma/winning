<script setup>
import { ref } from 'vue';

// No script logic needed for the header, but a new component might need it.
</script>

<template>
  <div class="flex flex-col items-center justify-center">
      
      <!-- New 'Invite Friends' Card Component -->
    <div class="w-full p-6 rounded-3xl  overflow-hidden relative">
      <!-- Background pattern and gradient -->
      <div 
        class="absolute inset-0 z-0 opacity-40" 
        style="background-image: url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M50 0L100 25L100 75L50 100L0 75L0 25Z\' stroke=\'%23ffffff\' stroke-width=\'2\' fill=\'none\'%3E%3C/path%3E%3C/svg%3E'); background-size: 25px 25px; background-repeat: repeat;"
      ></div>
      
      <!-- Card Content -->
      <div class="relative z-20 flex flex-col items-center text-center">
        <!-- Top dots -->
        <div class="absolute -top-1 right-2 w-full flex justify-end space-x-1">
          <span class="w-2 h-2 rounded-full bg-purple-500 animate-pulse-slow delay-100"></span>
          <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse-slow delay-200"></span>
          <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse-slow delay-300"></span>
        </div>
        <div class="absolute -top-1 left-2 w-full flex justify-start space-x-1">
          <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse-slow delay-400"></span>
          <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse-slow delay-500"></span>
          <span class="w-2 h-2 rounded-full bg-purple-500 animate-pulse-slow delay-600"></span>
        </div>


        <h2 class="text-md md:text-lg font-bold text-gray-800 leading-tight mb-2">
          Invite your friends and<br>
          <span class="text-orange-500">Earn 10% more</span>
        </h2>

        <!-- Social Media Icons -->
        <div class="flex justify-center space-x-4 mt-3! w-full">
          <!-- whatsapp -->
           <img src="/public/whatsapp.png" class="cursor-pointer rounded-full hover:scale-110"/>
          
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 2.5s infinite;
}
</style>
