<script setup>
import { ref, onMounted } from 'vue';

// Reactive state for the wheel's rotation
const currentDegree = ref(0);
const spinning = ref(false);
const spinWheelRef = ref(null);

/**
 * Handles the logic for spinning the wheel.
 * Prevents multiple spins while the animation is in progress.
 */
const spinWheel = () => {
  if (spinning.value) {
    return;
  }

  spinning.value = true;
  
  // Generate a random number of rotations (between 3 and 5 full rotations)
  const randomRotations = Math.floor(Math.random() * 3) + 3;
  const randomExtraDegree = Math.floor(Math.random() * 360);
  
  currentDegree.value += randomRotations * 360 + randomExtraDegree;
  
  // Re-enable spinning after the animation completes (5 seconds)
  setTimeout(() => {
    spinning.value = false;
  }, 5000);
};

// CSS styles and logic for confetti animation
const confettiColors = ['#f43f5e', '#ef4444', '#f59e0b', '#22c55e', '#3b82f6', '#8b5cf6'];
const createConfetti = () => {
    const container = document.querySelector('.confetti');
    if (container) {
        for (let i = 0; i < 50; i++) {
            const piece = document.createElement('div');
            piece.classList.add('confetti-piece');
            piece.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            piece.style.left = `${Math.random() * 100}%`;
            piece.style.animationDelay = `${Math.random() * -5}s`;
            piece.style.setProperty('--x', `${(Math.random() - 0.5) * 50}px`);
            container.appendChild(piece);
        }
    }
};

// Create confetti after the component is mounted to the DOM
onMounted(() => {
  createConfetti();
});
</script>

<template>
  <div class="flex items-center justify-center min-h-screen relative p-4">

    <!-- Confetti animation layer -->
    <div class="confetti"></div>

    <!-- Main card container -->
    <div class="bg-white p-6 rounded-[2rem] shadow-2xl relative z-20 w-full max-w-sm overflow-hidden text-center border-4 border-white">
        
      <!-- Header Section -->
      <div class="mb-4">
          <h1 class="text-red-600 font-extrabold text-2xl md:text-3xl leading-tight mb-1">
              SPIN & WIN CODE<br>EVERY DAY NEW OFFER
          </h1>
          <p class="text-gray-600 text-sm md:text-base font-semibold mb-2">WIN EXCITING REWARDS EVERY DAY</p>
          <p class="text-gray-400 text-xs md:text-sm">FROM 01-08-2022</p>
      </div>

      <!-- Spin Wheel and Base -->
      <div class="relative flex flex-col items-center">
          <!-- Spin Wheel Container -->
          <div class="spin-wheel-container relative aspect-square">
              <!-- Wheel graphic with slices and labels -->
              <div 
                  ref="spinWheelRef"
                  id="spin-wheel"
                  class="spin-wheel relative w-full h-full rounded-full shadow-2xl overflow-hidden cursor-pointer"
                  @click="spinWheel"
                  :style="{
                    transform: `rotate(${currentDegree}deg)`,
                    transitionDuration: spinning ? '5s' : '0s'
                  }"
                  style="background: conic-gradient(
                      #8b5cf6 0% 16.66%,
                      #ef4444 16.66% 33.33%,
                      #f59e0b 33.33% 50%,
                      #22c55e 50% 66.66%,
                      #1e3a8a 66.66% 83.33%,
                      #9333ea 83.33% 100%
                  );"
              >
                  <!-- Sandhai Logo at the center -->
                  <div class="absolute inset-0 flex items-center justify-center">
                      <div class="w-1/3 h-1/3 bg-white rounded-full flex items-center justify-center shadow-inner">
                          <img src="https://placehold.co/100x100/ffffff/8B5CF6?text=Sandhai" alt="Sandhai Logo" class="w-2/3">
                      </div>
                  </div>
              </div>
          </div>

          <!-- Red base for the wheel -->
          <div class="relative w-[150%] h-8 bg-white rounded-full mt-[-2rem] z-10 shadow-xl">
              <div class="absolute inset-0 flex items-center justify-center">
                  <div class="w-1/2 h-full bg-red-600 rounded-b-full"></div>
              </div>
          </div>
      </div>

      <!-- Simulated Character -->
      <div class="relative mt-4">
          <img src="https://placehold.co/150x200/22c55e/ffffff?text=Happy+Man" alt="Happy man with phone" class="mx-auto block -mt-24 w-1/2 md:w-auto">
      </div>

      <!-- Footer section with links -->
      <div class="mt-4 text-center">
          <a href="https://www.sandhai.com" class="text-blue-600 font-bold text-lg hover:underline block mb-1">
              www.sandhai.com
          </a>
          <p class="text-gray-500 text-sm mb-2">sandhaiglobal</p>
          <!-- Social media icons - using a simple placeholder -->
          <div class="flex justify-center space-x-2 text-gray-400">
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.666 7.425c.083.568.125 1.135.125 1.703 0 2.222-.61 4.22-1.782 5.392-1.173 1.173-3.171 1.783-5.393 1.783-2.221 0-4.219-.61-5.392-1.783-1.173-1.172-1.782-3.17-1.782-5.392 0-2.222.61-4.22 1.782-5.392 1.173-1.173 3.171-1.783 5.392-1.783 2.222 0 4.22.61 5.393 1.783z"/></svg></a>
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.366 7.234c0-2.071-1.688-3.75-3.75-3.75-2.071 0-3.75 1.68-3.75 3.75 0 2.071 1.679 3.75 3.75 3.75 2.062 0 3.75-1.679 3.75-3.75z"/></svg></a>
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.366 7.234c0-2.071-1.688-3.75-3.75-3.75-2.071 0-3.75 1.68-3.75 3.75 0 2.071 1.679 3.75 3.75 3.75 2.062 0 3.75-1.679 3.75-3.75z"/></svg></a>
          </div>
      </div>
    </div>
  </div>
</template>
