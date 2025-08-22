<template>
    <div class="flex justify-center items-center gap-4 text-gray-400 text-xs md:text-sm">
        <p class="cursor-pointer hover:underline" @click="$emit('faq')">FAQs</p>
        <p class="cursor-pointer hover:underline" @click="$emit('privacy-policy')">Privacy Policy</p>
    </div>
</template>