<script setup>
import { ref } from "vue";

const emit = defineEmits(['navigate'])
const op = ref();


const toggle = (event) => {
    op.value.toggle(event);
}

const navigate = (page) => {
    emit('navigate', page)
    op.value.hide();
}
</script>

<template>
  <!-- <div class="flex items-center justify-center min-h-screen bg-gray-100 p-4"> -->
      <div class="card flex justify-center bg-gradient-to-br from-green-500 to-green-700 ">
        <Popover ref="op" class="bg-gradient-to-br from-green-500 to-green-700 ">
            <div class="flex flex-col gap-4 bg-gradient-to-br from-green-500 to-green-700 ">
                <div>
                    <!-- <span class="font-medium block mb-2">User</span> -->
                    <ul class="list-none p-0 m-0 flex flex-col">
                        <li class="flex items-center gap-2 px-2 py-3 hover:bg-emphasis cursor-pointer rounded-border hover:text-gray-500" @click="navigate('profile')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                            </svg>
                            <div>
                                <span class="font-medium text-sm ">Profile</span>
                            </div>
                        </li>
                        <li class="flex items-center gap-2 px-2 py-3 hover:bg-emphasis cursor-pointer rounded-border hover:text-gray-500" @click="navigate('claim-reward')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gift" viewBox="0 0 16 16">
                                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z"/>
                            </svg>
                            <div>
                                <span class="font-medium text-sm ">Claim Reward</span>
                            </div>
                        </li>
                        <li class="flex items-center gap-2 px-2 py-3 hover:bg-emphasis cursor-pointer rounded-border hover:text-gray-500" @click="navigate('logout')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                                <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                            </svg>
                            <div>
                                <span class="font-medium text-sm text-red-400">Logout</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Popover>
    </div>
    <!-- Container for the header. Using a light background to make the white stand out. -->
    <div class="flex items-center justify-between w-full p-3 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 ">
      
      <!-- Left side: Beelucky Logo -->
      <div class="cursor-pointer flex items-center space-x-2" @click="toggle">
        <!-- Honeycomb-like SVG icon -->
        <svg class="w-8 h-8 text-green-700" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L6 5.5v7l6 3.5 6-3.5v-7L12 2zm0 1.9l4.5 2.6v5.2L12 14.3l-4.5-2.6V4.5L12 1.9zm-6 8.7L12 16.5l6-3.5v-7l-6-3.5-6 3.5v7zM12 11.2l-3 1.7v-3.4l3-1.7zm0 1.7l3 1.7v-3.4l-3-1.7z"/>
        </svg>
        <span class="text-xl font-bold text-gray-800">Beelucky</span>
        
      </div>
      <!-- Right side: Diamond pill button -->
      <button @click="navigate('winners-page')" class="cursor-pointer flex items-center p-1 pl-2 pr-2 text-white font-semibold rounded-full bg-gradient-to-r from-green-500 to-green-700 shadow-lg transition-transform transform hover:scale-105">
        <!-- Diamond SVG icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-1 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 7v10l8 5 8-5V7L12 2zm0 2.5l6 3.5-6 3.5-6-3.5L12 4.5zM12 13.5l-6-3.5v7l6 3.5 6-3.5v-7l-6 3.5z"/>
        </svg>
        <!-- Number of diamonds -->
        <span class="text-sm">Winners</span>
      </button>
      
    </div>
  <!-- </div> -->
</template>