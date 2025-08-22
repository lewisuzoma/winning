<template>
    <div class="flex justify-center min-h-screen relative p-4">
        <div class="confetti"></div>
        <div class="bg-gradient-to-br from-green-500 to-green-700 p-2 rounded-[2rem] shadow-2xl relative min-h-3/4! w-full max-w-xl overflow-hidden border-4 border-gray-50">
            <!-- Background Bubbles/Orbs -->
            <div class="absolute inset-0 overflow-hidden z-0 pointer-events-none">
                <div class="bubble-green w-24 h-24 rounded-full absolute top-10 left-10 animate-bubble delay-1000"></div>
                <div class="bubble-green w-32 h-32 rounded-full absolute bottom-20 right-20 animate-bubble delay-2000"></div>
                <div class="bubble-green w-20 h-20 rounded-full absolute top-1/4 right-1/4 animate-bubble delay-3000"></div>
                <div class="bubble-green w-28 h-28 rounded-full absolute bottom-1/3 left-1/3 animate-bubble delay-4000"></div>
                <div class="bubble-green w-36 h-36 rounded-full absolute top-2/3 left-1/2 animate-bubble delay-5000"></div>
            </div>

            <template v-if="$store.state.page[$store.state.page.length - 1]==='home'">
                <WelcomeBar @navigate="navigate"/>
                <WalletCard @navigate="navigate" />
                <SpinWheel2 />
                <InviteFriend />
                <Footer @faq="navigate('faqs')" @privacy-policy="navigate('privacy-policy')" />
            </template>
            <template v-if="$store.state.page[$store.state.page.length - 1]==='winners-page' ||
                            $store.state.page[$store.state.page.length - 1]==='faqs' ||
                            $store.state.page[$store.state.page.length - 1]==='privacy-policy' ||
                            $store.state.page[$store.state.page.length - 1]==='profile' ||
                            $store.state.page[$store.state.page.length - 1]==='claim-reward' ||
                            $store.state.page[$store.state.page.length - 1]==='add-fund' ||
                            $store.state.page[$store.state.page.length - 1]==='my-referrals' ||
                            $store.state.page[$store.state.page.length - 1]==='my-winnings' ||
                            $store.state.page[$store.state.page.length - 1]==='change-password'">
                <NavBar :page="$store.state.page" @back="navigate('', 'back')"/>

                <WinnersPage v-if="$store.state.page[$store.state.page.length - 1]==='winners-page'"/>
                <ProfilePage @navigate="navigate" v-else-if="$store.state.page[$store.state.page.length - 1]==='profile'"/>
                <ClaimReward v-else-if="$store.state.page[$store.state.page.length - 1]==='claim-reward'"/>
                <AddFund v-else-if="$store.state.page[$store.state.page.length - 1]==='add-fund'"/>
                <FAQPage v-else-if="$store.state.page[$store.state.page.length - 1]==='faqs'"/>
                <PrivacyPolicyPage v-else-if="$store.state.page[$store.state.page.length - 1]==='privacy-policy'"/>
                <MyReferralsPage v-else-if="$store.state.page[$store.state.page.length - 1]==='my-referrals'"/>
                <MyWinningsPage v-else-if="$store.state.page[$store.state.page.length - 1]==='my-winnings'"/>
                <ChangePassword v-else-if="$store.state.page[$store.state.page.length - 1]==='change-password'"/>
            </template>
        </div>
    </div>
    

</template>

<script setup>
import { onMounted, ref} from 'vue';
import WelcomeBar from '@/components/WelcomeBar.vue'
import WalletCard from '@/components/WalletCard.vue'
import SpinWheel2 from '@/components/SpinWheel2.vue'
import InviteFriend from '@/components/InviteFriend.vue'
import Footer from '@/components/Footer.vue'
import NavBar from '@/components/NavBar.vue';
import WinnersPage from '@/pages/WinnersPage.vue';
import ProfilePage from '@/pages/ProfilePage.vue';
import ClaimReward from '@/pages/ClaimReward.vue';
import AddFund from '@/pages/AddFund.vue';
import FAQPage from '@/pages/FAQPage.vue';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage.vue';
import MyReferralsPage from '@/pages/MyReferralsPage.vue';
import MyWinningsPage from '@/pages/MyWinningsPage.vue';
import ChangePassword from '@/pages/ChangePassword.vue';
import store from '@/store';

const page = ref("home");

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

const navigate = (event, direction) => {
    if(direction=='back') {
        store.dispatch('REMOVE_PAGE')
    } else {
        store.dispatch('UPDATE_PAGE', event)
    }
}



// Create confetti after the component is mounted to the DOM
onMounted(() => {
  createConfetti();
});
</script>
<style scoped>
.bubble-green {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@keyframes bubble {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0.5;
    }
    100% {
        transform: translateY(-500px) rotate(360deg);
        opacity: 0;
    }
}

.animate-bubble {
    animation: bubble 15s infinite linear;
}
</style>
