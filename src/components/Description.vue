<template>
    <section class="bg-section">
        <div class="flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-16 xl:mx-32 py-10 lg:py-20 text-center lg:text-left">
            <div class="flex flex-col items-center lg:items-start lg:w-1/2">
                <img src="/public/button.png" alt="Button" class="w-1/2 lg:w-1/3">
                <h1 class="text-4xl lg:text-6xl font-bold text-white mt-6">
                    Buy, trade and store <br> cryptocurrencies
                </h1>
                <div class="flex flex-col lg:flex-row items-center mt-10 w-full max-w-xs lg:max-w-md">
                    <div class="relative w-full">
                        <input 
                            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-t-md lg:rounded-l-md lg:rounded-tr-none focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            type="email" 
                            placeholder="Example@gmail.com"
                            aria-label="Email address"
                        >
                        <img 
                            class="absolute top-1/2 transform -translate-y-1/2 left-3 h-5 w-5 text-gray-400" 
                            src="/public/mail.svg" 
                            alt="Mail icon"
                        >
                    </div>
                    <button class="bg-cyan font-semibold text-black px-6 rounded-xl lg:rounded-r-md lg:rounded-bl-none lg:rounded-tr-none w-full lg:w-auto mt-4 lg:mt-0">
                        Sign in
                    </button>
                </div>
            </div>
            <img src="/public/ill.png" alt="Illustration" class="w-full lg:w-1/2 mt-10 lg:mt-0">
        </div>
    </section>
</template>
