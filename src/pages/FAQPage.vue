<script setup>
import { ref } from 'vue';

// FAQ data with a reactive state to control the open/closed state of each item
const faqs = ref([
  {
    question: 'What is NaijaWINS 3 Star?',
    answer: 'NaijaWINS is a fun and fair reward platform where you can spin a wheel for just ₦300 and win exciting cash prizes, data bundles, or our grand prizes.',
    open: false,
  },
  {
    question: 'How do I fund my account?',
    answer: 'You can fund your account by clicking the "Add Fund" button on your dashboard. We support various payment methods, including credit/debit cards, bank transfers, and USSD.',
    open: false,
  },
  {
    question: 'How do I withdraw my cash winnings?',
    answer: 'To withdraw your cash winnings, go to the "Claim Reward" page, select "Cash," and enter the amount you wish to withdraw. The funds will be transferred to your registered bank account.',
    open: false,
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'No, there are no hidden fees. Each spin costs ₦300, and all transaction fees are covered by the platform.',
    open: false,
  },
  {
    question: 'Is NaijaWINS a betting or gambling site?',
    answer: 'No, we are not a betting site or lottery system. We operate strictly as a private brand promotional platform, focused on providing daily rewards and opportunities to Nigerians.',
    open: false,
  },
  {
    question: 'What happens if I encounter an issue?',
    answer: 'If you have any issues or questions, you can contact our support team via the integrated WhatsApp chat on our platform. We are here to help!',
    open: false,
  },
]);

// Function to toggle the open/closed state of an FAQ item
const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<template>
  <div class="bg-gradient-to-br from-green-500 to-green-700 h-full p-4 md:p-8 text-white relative">

    <!-- Header with Back Button and Title -->
    <div class="flex items-center justify-center mb-8!">
      <h1 class="text-2xl font-bold">FAQs</h1>
      <div></div> <!-- Spacer for centering -->
    </div>

    <!-- FAQ Accordion Container -->
    <div class="space-y-4!">
      <div v-for="(faq, index) in faqs" :key="index" class="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 ease-in-out">
        <!-- Question Header (clickable) -->
        <button 
          @click="toggleFaq(index)" 
          class="w-full text-left p-4 md:p-6 flex items-center justify-between focus:outline-none"
        >
          <span class="font-semibold text-lg">{{ faq.question }}</span>
          <!-- Arrow Icon (rotates based on state) -->
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6 transform transition-transform duration-300"
            :class="{ 'rotate-180': faq.open }"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <!-- Answer Content (collapsible) -->
        <div 
          v-if="faq.open" 
          class="p-4 pt-0 md:p-6 md:pt-0 text-gray-200"
        >
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
