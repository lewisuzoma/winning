<template>
    <div class="flex flex-col items-center justify-center relative mb-12!">

         <!-- Main card container -->
        <!-- <div class="bg-white rounded-[2rem] relative  w-full max-w-xl overflow-hidden text-center border-4 border-white"> -->
            
            <!-- Header Section -->
            <!-- <div class="mb-4">
                <h1 class="text-red-600 mt-10! font-extrabold text-2xl md:text-3xl leading-tight mb-1">
                    SPIN & WIN CODE<br>EVERY DAY NEW OFFER
                </h1>
                <p class="text-gray-600 text-sm md:text-base font-semibold mb-2">WIN EXCITING REWARDS EVERY DAY</p>
                <p class="text-gray-400 text-xs md:text-sm">FROM 01-08-2022</p>
            </div> -->

            <div class="container">
                <div class="spinBtn" @click="spin">spin</div>
                <div class="wheel" :style="{ transform: `rotate(${rotation}deg)` }">
                    <div
                        class="number"
                        v-for="(item, i) in numbers"
                        :key="i"
                        :style="{ '--i': i + 1, '--clr': item.color }"
                    >
                        <span class="text-wrap">{{ item.value }}</span>
                    </div>
                </div>
            </div>
            <button @click="spinWheel" class="bg-gradient-to-br from-gray-200 to-gray-400 hover:bg-green-500 cursor-pointer text-gray-800 font-semibold py-2! px-8! rounded-full transition-colors duration-300 transform hover:scale-105">
                Play
            </button>

        <!-- </div> -->
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const rotation = ref(0);
// let value = Math.ceil(Math.random() * 3600);

const numbers = [
  { value: "Try Again / No Win", color: "#9e9e9e", probability: 40 },
  { value: "100MB", color: "#81c784", probability: 0 },
  { value: "500MB", color: "#a5d6a7", probability: 10 },
  // { value: "1GB", color: "#c8e6c9", probability: 0 },
  // { value: "3.5GB", color: "#b3e5fc", probability: 0 },
  { value: "₦500", color: "#ffcdd2", probability: 5 },
  { value: "₦1,000", color: "#c5e1a5", probability: 0 },
  { value: "₦3,000", color: "#a8e4a0", probability: 0 },
  { value: "₦10,000 Grand Win", color: "#ffab91", probability: 0 }, // Controlled manually
  { value: "₦100,000 NaijaWINS STAR", color: "#64b5f6", probability: 0 }, // Controlled manually
];

function spin() {
  const weightedNumbers = numbers.flatMap(item => Array(item.probability).fill(item));
  const randomIndex = Math.floor(Math.random() * weightedNumbers.length);
  const selectedItem = weightedNumbers[randomIndex];

  console.log(`Selected: ${selectedItem.value}`);

  const segmentAngle = 360 / numbers.length;
  const selectedIndex = numbers.findIndex(item => item.value === selectedItem.value);
  const selectedAngle = segmentAngle * selectedIndex;

  rotation.value = selectedAngle + Math.ceil(Math.random() * 3600); // Ensure the spin stops at the correct segment
}

function spinWheel() {
  // Step 1: Build weighted pool
  const weightedNumbers = numbers.flatMap(item =>
    Array(item.probability).fill(item)
  );

  if (weightedNumbers.length === 0) {
    console.warn("No probabilities set!");
    return;
  }

  // Step 2: Pick one random item
  const randomIndex = Math.floor(Math.random() * weightedNumbers.length);
  const selectedItem = weightedNumbers[randomIndex];

  console.log(`Selected: ${selectedItem.value}`);

  // Step 3: Find its index in original numbers array
  const selectedIndex = numbers.findIndex(
    item => item.value === selectedItem.value
  );

  // Step 4: Compute exact angle
  const segmentAngle = 360 / numbers.length;

  // Center of segment = start angle + half segment
  const selectedAngle =
    (segmentAngle * selectedIndex) + segmentAngle / 10;

  // Step 5: Add extra full rotations for animation
  // const extraSpins = 5; // spin at least 5 times
  const extraSpins = Math.floor(Math.random() * 6) + 3; // 3–8 full spins
  const finalRotation = (360 * extraSpins) + (360 - selectedAngle);
  // const finalRotation = 360 * extraSpins + (360 - selectedAngle);

  // Apply
  rotation.value = finalRotation;
}

</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
}

.container {
  position: relative;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin: 50px 0;
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
  font-size: 0.9em;
  text-wrap: wrap;
  font-weight: 700;
  color: #fff;
  /* text-shadow: 3px 5px 2px rgba(0, 0, 0, 0.15); */
}

.number span::before {
  /* content: "#"; */
  position: absolute;
  font-size: 0.75em;
  font-weight: 500;
}

@media (width >= 48rem) { 
    .container {
        width: 350px;
        height: 350px;
    }
}
</style>
