<script setup>
import { ref } from 'vue';

// Reactive state for referral information and a list of referred users
const referralInfo = ref({
  link: 'https://naijawins.com/ref/esther123',
  totalEarnings: 450, // Example earnings in Naira
  referredCount: 9,
});

// A simple copy-to-clipboard function using document.execCommand
const copyToClipboard = () => {
  const referralLinkElement = document.getElementById('referral-link');
  if (referralLinkElement) {
    const range = document.createRange();
    range.selectNode(referralLinkElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    try {
      document.execCommand('copy');
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    window.getSelection().removeAllRanges();
  }
};

// Dummy data for referred users
const referredUsers = ref([
  { id: 1, name: 'Tunde', status: 'Active', joinDate: '2 weeks ago' },
  { id: 2, name: 'Chisom', status: 'Pending', joinDate: '1 week ago' },
  { id: 3, name: 'Ayo', status: 'Active', joinDate: '3 days ago' },
  { id: 4, name: 'Fatima', status: 'Active', joinDate: '1 day ago' },
]);

</script>

<template>
  <div class="bg-gradient-to-br from-green-500 to-green-700 h-full p-4 md:p-8 text-white relative">
    
    <!-- Header with Back Button and Title -->
    <div class="flex items-center justify-center mb-8!">
      <h1 class="text-2xl font-bold">My Referrals</h1>
      <div></div> <!-- Spacer for centering -->
    </div>

    <!-- Referral Summary Card -->
    <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg mb-8! text-center">
      <h2 class="text-xl font-semibold mb-2">Total Referral Earnings</h2>
      <p class="text-4xl md:text-5xl font-extrabold text-yellow-300">₦{{ referralInfo.totalEarnings.toLocaleString() }}</p>
      <p class="text-sm text-gray-200 mt-1">{{ referralInfo.referredCount }} active referrals</p>
    </div>

    <!-- Referral Link Section -->
    <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg mb-8!">
      <h3 class="text-lg font-semibold mb-3">Your Referral Link</h3>
      <div class="flex items-center space-x-2!">
        <span 
          id="referral-link" 
          class="flex-1 p-3 rounded-lg bg-gray-800/50 text-sm md:text-base overflow-x-auto whitespace-nowrap scrollbar-hide"
        >
          {{ referralInfo.link }}
        </span>
        <button 
          @click="copyToClipboard" 
          class="p-3 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full shadow-md text-gray-800 transition-transform transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
         </svg>
        </button>
      </div>
    </div>
    
    <!-- Referred Users List -->
    <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg">
      <h3 class="text-lg font-semibold mb-4!">Your Referred Users ({{ referredUsers.length }})</h3>
      <div class="overflow-y-auto max-h-64 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
        <ul class="space-y-4!">
          <li v-for="user in referredUsers" :key="user.id" class="p-4 rounded-xl bg-gray-900/10 flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <span class="text-2xl" :class="{ 'text-green-400': user.status === 'Active', 'text-yellow-400': user.status === 'Pending' }">
                <!-- User Icon -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.93 0 3.5 1.57 3.5 3.5S13.93 12 12 12s-3.5-1.57-3.5-3.5S10.07 5 12 5zm0 14.3c-2.58 0-4.85-1.12-6.5-2.94.02-2.73 4.31-4.26 6.5-4.26s6.48 1.53 6.5 4.26c-1.65 1.82-3.92 2.94-6.5 2.94z"/>
                </svg>
              </span>
              <div>
                <p class="font-semibold">{{ user.name }}</p>
                <p class="text-xs text-gray-300">{{ user.joinDate }}</p>
              </div>
            </div>
            <span class="text-xs font-semibold px-2 py-1 rounded-full"
              :class="{
                'bg-green-400 text-green-900': user.status === 'Active',
                'bg-yellow-400 text-yellow-900': user.status === 'Pending'
              }"
            >
              {{ user.status }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom scrollbar for better UX on the user list */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
