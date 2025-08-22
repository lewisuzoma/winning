<script setup>
import { ref } from 'vue';

const emit = defineEmits(['navigate'])
// Reactive state for user information
const user = ref({
  name: 'Esther',
  userId: 'NG1234567890', // Placeholder for a unique user ID
  balance: 1500,
  profilePic: 'https://placehold.co/100x100/A0DE6A/FFFFFF?text=E', // Placeholder image URL
});

const navigate = (page) => {
    emit('navigate', page)
}


</script>

<template>
  <div class="bg-gradient-to-br from-green-500 to-green-700 h-full p-4 md:p-8 text-white relative">
    <!-- Header with Back Button and Title -->
    <div class="flex items-center justify-center mb-8">
      <h1 class="text-2xl  font-bold">Profile</h1>
      <div></div> <!-- Spacer to center the title -->
    </div>

    <!-- Main Profile Section -->
    <div class="flex flex-col items-center justify-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg mb-8">
      <!-- Profile Picture -->
      <img :src="user.profilePic" alt="Profile Picture" class="w-24 h-24 rounded-full border-4 border-white mb-4 shadow-xl">
      
      <!-- User Info -->
      <h2 class="text-3xl font-extrabold">{{ user.name }}</h2>
      <p class="text-sm font-light text-gray-200">User ID: {{ user.userId }}</p>
    </div>

    <!-- Account Balance Card -->
    <div class="bg-white/20 backdrop-blur-sm rounded-xl p-6 my-8! shadow-xl">
      <h3 class="text-lg font-semibold mb-2">My Balance</h3>
      <p class="text-3xl font-bold">₦{{ user.balance.toLocaleString() }}</p>
    </div>

    <!-- Profile Options List -->
    <ul class="space-y-4!">
      <!-- My Referrals -->
      <li @click="navigate('my-referrals')" class="bg-white/20 backdrop-blur-sm rounded-xl p-4 shadow-md flex items-center justify-between transition-transform transform hover:scale-105 cursor-pointer">
        <div class="flex items-center space-x-4!">
          <!-- Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM16 13c-1.895 0-3.469.789-5.183 2.112C9.555 16.48 8.163 17 6 17c-2.163 0-3.555-.52-4.817-1.888C-1.183 14.789-2.228 14-4 14v10c1.772 0 2.817-.789 4.183-2.112C8.445 19.48 9.837 20 12 20s3.555-.52 5.183-1.888C18.445 16.48 19.837 16 22 16v-2c-1.772 0-2.817.789-4.183 2.112C16.445 17.48 15.053 18 13 18s-3.555-.52-5.183-1.888C7.555 14.48 6.163 14 4 14c-1.895 0-3.469-.789-5.183-2.112C-1.183 9.789-2.228 9-4 9v-2c1.772 0 2.817.789 4.183 2.112C8.445 11.48 9.837 12 12 12s3.555-.52 5.183-1.888C18.445 9.48 19.837 9 22 9v2c-1.772 0-2.817.789-4.183 2.112C16.445 14.48 15.053 15 13 15s-3.555-.52-5.183-1.888C7.555 12.48 6.163 12 4 12c-1.895 0-3.469-.789-5.183-2.112C-1.183 8.789-2.228 8-4 8v-2c1.772 0 2.817.789 4.183 2.112C8.445 9.48 9.837 10 12 10s3.555-.52 5.183-1.888C18.445 8.48 19.837 8 22 8v2c-1.772 0-2.817.789-4.183 2.112C16.445 13.48 15.053 14 13 14s-3.555-.52-5.183-1.888C7.555 11.48 6.163 11 4 11c-1.895 0-3.469-.789-5.183-2.112C-1.183 7.789-2.228 7-4 7v-2c1.772 0 2.817.789 4.183 2.112C8.445 8.48 9.837 9 12 9s3.555-.52 5.183-1.888C18.445 7.48 19.837 7 22 7v2z"/>
          </svg>
          <span class="text-white">My Referrals</span>
        </div>
        <!-- Arrow -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </li>

      <!-- My Winnings -->
      <li @click="navigate('my-winnings')" class="bg-white/20 backdrop-blur-sm rounded-xl p-4 shadow-md flex items-center justify-between transition-transform transform hover:scale-105 cursor-pointer">
        <div class="flex items-center space-x-4!">
          <!-- Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span class="text-white">My Winnings</span>
        </div>
        <!-- Arrow -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </li>

      <!-- Change Password -->
      <li @click="navigate('change-password')" class="bg-white/20 backdrop-blur-sm rounded-xl p-4 shadow-md flex items-center justify-between transition-transform transform hover:scale-105 cursor-pointer">
        <div class="flex items-center space-x-4!">
          <!-- Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
            <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
            <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
         </svg>
          <span class="text-white">Change Password</span>
        </div>
        <!-- Arrow -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </li>

      <!-- Sign Out -->
      <li class="bg-white/20 backdrop-blur-sm rounded-xl p-4 shadow-md flex items-center justify-between transition-transform transform hover:scale-105 cursor-pointer ">
        <div class="flex items-center space-x-4!">
          <!-- Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span class="text-red-400">Log Out</span>
        </div>
        <!-- Arrow -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </li>
    </ul>
  </div>
</template>
