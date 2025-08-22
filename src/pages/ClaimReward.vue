<script setup>
import { ref } from 'vue';

// Reactive state to manage the user's data and form inputs
const user = ref({
  balance: 2500, // Example balance in Naira
});

const rewardType = ref('cash'); // 'cash' or 'data'
const claimAmount = ref(0);
const message = ref(null);

// Function to handle the claim submission
const handleClaim = () => {
  // Reset message
  message.value = null;

  // Basic validation and logic
  if (claimAmount.value <= 0) {
    message.value = { text: 'Please enter a valid amount to claim.', type: 'error' };
    return;
  }

  // Check if balance is sufficient
  if (claimAmount.value > user.value.balance) {
    message.value = { text: 'Insufficient balance. Please add more funds.', type: 'error' };
    return;
  }

  // Simulate a successful claim
  // In a real application, you would make an API call here.
  user.value.balance -= claimAmount.value;
  message.value = { text: `Success! Your claim for ₦${claimAmount.value} has been processed.`, type: 'success' };
  claimAmount.value = 0; // Clear the input field
};

</script>

<template>
  <div class="bg-gradient-to-br from-green-500 to-green-700 h-full p-4 md:p-8 text-white relative">
    
    <!-- Header with Back Button and Title -->
    <div class="flex items-center justify-center mb-8!">
      <h1 class="text-2xl font-bold">Claim Reward</h1>
      <div></div> <!-- Spacer for centering -->
    </div>

    <!-- Main Content Card -->
    <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg">
      
      <!-- Current Balance Display -->
      <div class="text-center mb-6!">
        <p class="text-lg font-semibold">Current Balance</p>
        <p class="text-4xl md:text-5xl font-extrabold mt-1">₦{{ user.balance.toLocaleString() }}</p>
      </div>

      <!-- Claim Form -->
      <form @submit.prevent="handleClaim">
        
        <!-- Reward Type Selector -->
        <div class="mb-6!">
          <label for="reward-type" class="block text-white font-semibold mb-2">Select Reward Type</label>
          <select 
            id="reward-type" 
            v-model="rewardType"
            class="w-full p-3 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
          >
            <option value="cash" class="bg-gray-700">Cash</option>
            <option value="data" class="bg-gray-700">Data</option>
          </select>
        </div>

        <!-- Amount Input -->
        <div class="mb-6!">
          <label for="claim-amount" class="block text-white font-semibold mb-2">Amount to Claim</label>
          <div class="relative">
            <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 font-bold">₦</span>
            <input 
              id="claim-amount" 
              type="number" 
              v-model.number="claimAmount" 
              placeholder="Enter amount" 
              min="0"
              class="w-full p-3 pl-8 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors placeholder-gray-400"
            />
          </div>
        </div>
        
        <!-- Submission Message -->
        <div v-if="message" :class="['p-4 rounded-xl mb-6 text-center', message.type === 'success' ? 'bg-green-600/70' : 'bg-red-600/70']">
          <p>{{ message.text }}</p>
        </div>

        <!-- Claim Button -->
        <button 
          type="submit"
          class="w-full py-3 rounded-full font-bold text-lg shadow-xl transition-all transform hover:scale-105 
                 bg-gradient-to-br from-gray-200 to-gray-400 text-gray-800"
        >
          Claim Reward
        </button>
      </form>
    </div>
  </div>
</template>
