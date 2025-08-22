<script setup>
import { ref } from 'vue';

const user = ref({
  balance: 2500, // Example balance
});

const fundAmount = ref(0);
const paymentMethod = ref('card');
const message = ref(null);

// Function to handle adding funds
const handleAddFunds = () => {
  message.value = null;

  if (fundAmount.value <= 0) {
    message.value = { text: 'Please enter a valid amount.', type: 'error' };
    return;
  }

  // Simulate a successful transaction
  // In a real app, this would be an API call to a payment gateway
  setTimeout(() => {
    user.value.balance += fundAmount.value;
    message.value = { text: `Success! ₦${fundAmount.value} has been added to your account.`, type: 'success' };
    fundAmount.value = 0; // Reset input field
  }, 1500);
};

</script>

<template>
  <div class="bg-gradient-to-br from-green-500 to-green-700h-full p-4 md:p-8 text-white relative">
    
    <!-- Header with Back Button and Title -->
    <div class="flex items-center justify-center mb-8!">
      <h1 class="text-2xl font-bold">Add Funds</h1>
      <div></div> <!-- Spacer for centering -->
    </div>

    <!-- Main Content Card -->
    <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg">
      
      <!-- Current Balance Display -->
      <div class="text-center mb-6!">
        <p class="text-lg font-semibold">Current Balance</p>
        <p class="text-4xl md:text-5xl font-extrabold mt-1">₦{{ user.balance.toLocaleString() }}</p>
      </div>

      <!-- Add Funds Form -->
      <form @submit.prevent="handleAddFunds">
        
        <!-- Amount Input -->
        <div class="mb-6!">
          <label for="fund-amount" class="block text-white font-semibold mb-2">Amount to Add</label>
          <div class="relative">
            <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 font-bold">₦</span>
            <input 
              id="fund-amount" 
              type="number" 
              v-model.number="fundAmount" 
              placeholder="Enter amount" 
              min="0"
              class="w-full p-3 pl-8 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors placeholder-gray-400"
            />
          </div>
        </div>
        
        <!-- Payment Method Selector -->
        <div class="mb-6!">
          <label for="payment-method" class="block text-white font-semibold mb-2">Payment Method</label>
          <select 
            id="payment-method" 
            v-model="paymentMethod"
            class="w-full p-3 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
          >
            <option value="card" class="bg-gray-700">Credit/Debit Card</option>
            <option value="bank" class="bg-gray-700">Bank Transfer</option>
            <option value="ussd" class="bg-gray-700">USSD</option>
          </select>
        </div>
        
        <!-- Submission Message -->
        <div v-if="message" :class="['p-4 rounded-xl mb-6 text-center', message.type === 'success' ? 'bg-green-600/70' : 'bg-red-600/70']">
          <p>{{ message.text }}</p>
        </div>

        <!-- Add Funds Button -->
        <button 
          type="submit"
          class="w-full py-3 rounded-full font-bold text-lg shadow-xl transition-all transform hover:scale-105 
                 bg-gradient-to-br from-gray-200 to-gray-400 text-gray-800"
        >
          Add Funds
        </button>
      </form>
    </div>
  </div>
</template>
