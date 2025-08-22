<script setup>
import { ref, computed } from 'vue';

// Dummy data for the user's winnings list
const winnings = ref([
  { id: 1, prize: 'N3,000 Cash', date: 'August 22, 2025', status: 'Claimed' },
  { id: 2, prize: '1.5GB Data', date: 'August 21, 2025', status: 'Claimed' },
  { id: 3, prize: 'N1,000 Cash', date: 'August 19, 2025', status: 'Pending' },
  { id: 4, prize: '500MB Data', date: 'August 18, 2025', status: 'Claimed' },
  { id: 5, prize: 'N10,000 Grand Win', date: 'August 15, 2025', status: 'Claimed' },
  { id: 6, prize: '2.5GB Data', date: 'August 14, 2025', status: 'Claimed' },
  { id: 7, prize: 'N500 Cash', date: 'August 12, 2025', status: 'Claimed' },
]);

// Computed property to calculate the total cash winnings
const totalCashWinnings = computed(() => {
  return winnings.value.reduce((total, winning) => {
    // Check if the prize is a cash prize and extract the amount
    if (winning.prize.includes('Cash') || winning.prize.includes('Grand Win')) {
      const amount = parseInt(winning.prize.replace(/\D/g, ''), 10);
      return total + amount;
    }
    return total;
  }, 0);
});
</script>

<template>
  <div class="bg-gradient-to-br from-green-500 to-green-700 h-full p-4 md:p-8 text-white relative">
    
    <!-- Header with Back Button and Title -->
    <div class="flex items-center justify-center mb-8!">
      <h1 class="text-2xl font-bold">My Winnings</h1>
      <div></div> <!-- Spacer for centering -->
    </div>

    <!-- Winnings Summary Card -->
    <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg mb-8! text-center">
      <h2 class="text-xl font-semibold mb-2">Total Cash Winnings</h2>
      <p class="text-4xl md:text-5xl font-extrabold text-yellow-300">₦{{ totalCashWinnings.toLocaleString() }}</p>
    </div>

    <!-- Winnings History List -->
    <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg">
      <h3 class="text-lg font-semibold mb-4">Winnings History</h3>
      <div class="overflow-y-auto max-h-96 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
        <ul class="space-y-4!">
          <li v-for="winning in winnings" :key="winning.id" class="p-4 rounded-xl bg-gray-900/10 flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <!-- Prize Icon (simple trophy emoji) -->
              <span class="text-2xl text-yellow-300">🏆</span>
              <div>
                <p class="font-semibold">{{ winning.prize }}</p>
                <p class="text-xs text-gray-300">{{ winning.date }}</p>
              </div>
            </div>
            <span class="text-xs font-semibold px-3 py-1 rounded-full"
              :class="{
                'bg-green-400 text-green-900': winning.status === 'Claimed',
                'bg-yellow-400 text-yellow-900': winning.status === 'Pending'
              }"
            >
              {{ winning.status }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom scrollbar for better UX on the winnings list */
.scrollbar-thin {
  scrollbar-width: thin;
  scrollbar-color: #9ca3af transparent;
}
.scrollbar-thin::-webkit-scrollbar {
  width: 8px;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: #9ca3af;
  border-radius: 9999px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}
</style>
