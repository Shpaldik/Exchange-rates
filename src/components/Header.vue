<template>
    <header class="fixed w-full top-0 z-10">
        <div class="flex justify-between items-center mx-32 py-6">
            <img src="/public/logo.svg" alt="">
            <div class="relative w-full max-w-xs">
                <input type="text" placeholder="Search" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <img class="absolute top-1/2 transform -translate-y-1/2 left-3 h-5 w-5 text-gray-400" src="/public/search-lg.svg" alt="Search Icon">
            </div>

            <div class="flex gap-7 items-center text-white lg:hidden">
                <a class="text-textGray" href="">Trade</a>
                <a class="text-textGray" href="">P2P</a>
                <a class="text-textGray" href="">Partners</a>
                <a class="text-textGray" href="">Mining</a>
                <a class="text-textGray" href="">Academy</a>
            </div>

            <div class="flex items-center gap-7">
                <div class="flex gap-4 items-center md:hidden">
                    <button class="bg-btnGray rounded-lg text-white py-2 px-4">Register</button>
                    <button class="bg-cyan rounded-lg py-2 px-4 ">Log in</button>
                </div>

                <img class="lgmenu:hidden" src="/public/menu.png" alt="">
            </div>

        </div>
    </header>
</template>

