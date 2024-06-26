<template>
    <section>
        <div class="flex justify-between mx-32 py-20 lg:block lg:text-center lg:justify-center lg:px-auto">
            <div>
                <img src="/public/button.png" alt="Button" width="300">
                <h1 class="text-6xl font-bold text-white mt-6">
                    Buy, trade and store <br> cryptocurrencies
                </h1>
                <div class="flex items-center mt-10">
                    <div class="relative w-full max-w-xs">
                        <input 
                            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
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
                    <button class="bg-cyan font-semibold rounded-r-md text-black py-2 px-4">Sign in</button>
                </div> 
            </div>
            <img src="/public/ill.png" alt="Illustration" width="700">   
        </div>
    </section>
</template>
