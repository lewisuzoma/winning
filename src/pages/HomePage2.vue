<template>
    <div class="flex items-center justify-center min-h-screen relative p-4">
        <!-- Confetti animation layer -->
        <div class="confetti"></div>
         <!-- Main card container -->
        <div class="bg-white px-50 p-6 rounded-[2rem] shadow-2xl relative  w-full max-w-xl overflow-hidden text-center border-4 border-white">
            
            <!-- Header Section -->
            <div class="mb-4">
                <h1 class="text-red-600 mt-10! font-extrabold text-2xl md:text-3xl leading-tight mb-1">
                    SPIN & WIN CODE<br>EVERY DAY NEW OFFER
                </h1>
                <p class="text-gray-600 text-sm md:text-base font-semibold mb-2">WIN EXCITING REWARDS EVERY DAY</p>
                <p class="text-gray-400 text-xs md:text-sm">FROM 01-08-2022</p>
            </div>

            <div class="container">
                <div class="spinBtn" @click="spin">spin</div>
                <div class="wheel" :style="{ transform: `rotate(${rotation}deg)` }">
                    <div
                        class="number"
                        v-for="(item, i) in numbers"
                        :key="i"
                        :style="{ '--i': i + 1, '--clr': item.color }"
                    >
                        <span>{{ item.value }}</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"

const rotation = ref(0)
let value = Math.ceil(Math.random() * 3600)

const numbers = [
  { value: 100, color: "#db7093" },
  { value: 1, color: "#20b2aa" },
  { value: 50, color: "#d63e92" },
  { value: 0, color: "#daa520" },
  { value: 1000, color: "#ff34f0" },
  { value: 10, color: "#ff7f50" },
  { value: 5, color: "#3cb371" },
  { value: 20, color: "#4169e1" },
]

function spin() {
  rotation.value = value
  value += Math.ceil(Math.random() * 3600)
}

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

<style scoped>

* {
  margin: 0;
  padding: 0;
}

.container {
  position: relative;
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 80px;
  margin-bottom: 80px;
}

.spinBtn {
  position: absolute;
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  color: #333;
  letter-spacing: 0.1em;
  border: 4px solid rgba(0, 0, 0, 0.75);
  cursor: pointer;
  user-select: none;
}

.spinBtn::before {
  content: "";
  position: absolute;
  top: -28px;
  width: 20px;
  height: 30px;
  background: #fff;
  clip-path: polygon(50% 0%, 15% 100%, 85% 100%);
}

.wheel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #333;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 0 5px #333, 0 0 0 15px #fff, 0 0 0 18px #111;
  transition: transform 5s ease-in-out;
}

.number {
  position: absolute;
  width: 50%;
  height: 50%;
  background: var(--clr);
  transform-origin: bottom right;
  transform: rotate(calc(45deg * var(--i)));
  clip-path: polygon(0 0, 56% 0, 100% 100%, 0 56%);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
}

.number span {
  position: relative;
  transform: rotate(45deg);
  font-size: 2em;
  font-weight: 700;
  color: #fff;
  text-shadow: 3px 5px 2px rgba(0, 0, 0, 0.15);
}

.number span::after {
  content: "$";
  position: absolute;
  font-size: 0.75em;
  font-weight: 500;
}
</style>
