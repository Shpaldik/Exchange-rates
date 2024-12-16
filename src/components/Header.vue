<template>
    <header class="fixed w-full top-0 z-10 bg-bgGray">
        <div class="flex justify-between items-center mx-4 sm:mx-8 lg:mx-16 xl:mx-32 py-4 lg:py-6">
            <img class="w-1/4 lg:w-1/5" src="/public/logo.svg" alt="Logo">
            <div class="relative w-full max-w-xs mx-4 lg:mx-0">
                <input type="text" placeholder="Search" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <img class="absolute top-1/2 transform -translate-y-1/2 left-3 h-5 w-5 text-gray-400" src="/public/search-lg.svg" alt="Search Icon">
            </div>
            <div class="hidden xl:flex gap-7 items-center text-white">
                <a class="text-textGray" href="#">Trade</a>
                <a class="text-textGray" href="#">P2P</a>
                <a class="text-textGray" href="#">Partners</a>
                <a class="text-textGray" href="#">Mining</a>
                <a class="text-textGray" href="#">Academy</a>
            </div>
            <div class="flex items-center gap-4 lg:gap-7">
                <div class="hidden lg:flex gap-4 items-center">
                    <button class="bg-btnGray rounded-lg text-white py-2 px-4">Register</button>
                    <button class="bg-cyan rounded-lg py-2 px-4">Log in</button>
                </div>
                <button @click="toggleMenu" class="w-8 h-8 lg:w-10 lg:h-10 cursor-pointer lg:hidden">
                    <img v-if="!showMenu" src="/public/menu.png" alt="Menu">
                    <img v-else src="/public/close.png" alt="Close">
                </button>
            </div>
        </div>

        <div v-if="showMenu" class="lg:hidden bg-bgGray absolute top-0 left-0 w-full h-screen py-4">
            <div class="flex justify-end mx-4 sm:mx-8 lg:mx-16 xl:mx-32">
                <button @click="closeMenu" class="w-8 h-8 cursor-pointer">
                    <img src="/public/close.png" alt="Close">
                </button>
            </div>
            <div class="flex flex-col items-center text-white mt-8">
                <a class="text-textGray my-2" href="#">Trade</a>
                <a class="text-textGray my-2" href="#">P2P</a>
                <a class="text-textGray my-2" href="#">Partners</a>
                <a class="text-textGray my-2" href="#">Mining</a>
                <a class="text-textGray my-2" href="#">Academy</a>
                <button class="bg-btnGray rounded-lg text-white py-2 px-4 my-4">Register</button>
                <button class="bg-cyan rounded-lg text-black py-2 px-4">Log in</button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false
        };
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu;
        },
        closeMenu() {
            this.showMenu = false;
        }
    }
};
</script>


