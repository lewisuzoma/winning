<script setup>
import { ref } from 'vue';

// Reactive state to manage form inputs and messages
const currentPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const message = ref(null);

/**
 * Handles the password change form submission.
 * This function simulates a password change, including basic validation.
 * In a real application, you would make an API call here to update the user's password.
 */
const handleChangePassword = () => {
  // Clear any previous messages
  message.value = null;

  // Basic client-side validation
  if (!currentPassword.value || !newPassword.value || !confirmPassword.value) {
    message.value = { text: 'All fields are required.', type: 'error' };
    return;
  }
  
  if (newPassword.value !== confirmPassword.value) {
    message.value = { text: 'New passwords do not match.', type: 'error' };
    return;
  }

  if (newPassword.value.length < 6) {
    message.value = { text: 'Password must be at least 6 characters long.', type: 'error' };
    return;
  }

  // Simulate a successful password change
  // In a real application, you would send a request to your server.
  setTimeout(() => {
    message.value = { text: 'Password changed successfully!', type: 'success' };
    // Clear the form fields after a successful change
    currentPassword.value = '';
    newPassword.value = '';
    confirmPassword.value = '';
  }, 1000);
};
</script>

<template>
  <div class="bg-gradient-to-br from-green-500 to-green-700 h-full p-4 md:p-8 text-white relative">
    
    <!-- Header with Back Button and Title -->
    <div class="flex items-center justify-center mb-8!">
      <h1 class="text-2xl font-bold">Change Password</h1>
      <div></div> <!-- Spacer for centering -->
    </div>

    <!-- Password Change Form Card -->
    <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg">
      
      <form @submit.prevent="handleChangePassword">
        <!-- Current Password Input -->
        <div class="mb-4!">
          <label for="current-password" class="block text-white font-semibold mb-2">Current Password</label>
          <input 
            id="current-password" 
            type="password" 
            v-model="currentPassword" 
            placeholder="Enter current password" 
            class="w-full p-3 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors placeholder-gray-400"
          />
        </div>
        
        <!-- New Password Input -->
        <div class="mb-4!">
          <label for="new-password" class="block text-white font-semibold mb-2">New Password</label>
          <input 
            id="new-password" 
            type="password" 
            v-model="newPassword" 
            placeholder="Enter new password" 
            class="w-full p-3 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors placeholder-gray-400"
          />
        </div>
        
        <!-- Confirm New Password Input -->
        <div class="mb-6!">
          <label for="confirm-password" class="block text-white font-semibold mb-2">Confirm New Password</label>
          <input 
            id="confirm-password" 
            type="password" 
            v-model="confirmPassword" 
            placeholder="Re-enter new password" 
            class="w-full p-3 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors placeholder-gray-400"
          />
        </div>
        
        <!-- Submission Message -->
        <div v-if="message" :class="['p-4 rounded-xl mb-6 text-center', message.type === 'success' ? 'bg-green-600/70' : 'bg-red-600/70']">
          <p>{{ message.text }}</p>
        </div>

        <!-- Change Password Button -->
        <button 
          type="submit"
          class="w-full py-3 rounded-full font-bold text-lg shadow-xl transition-all transform hover:scale-105 
                 bg-gradient-to-br from-gray-200 to-gray-400 text-gray-800"
        >
          Update Password
        </button>
      </form>
    </div>
  </div>
</template>
