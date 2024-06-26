<template>
  <section class="py-10">
    <div class="border-t border-gray-800 mt-3"></div>
    <div class="container mx-auto px-4 lg:px-16 xl:px-32 text-center py-10">
      <h2 class="text-3xl lg:text-5xl text-white">
        Register your account now <br class="hidden lg:inline"> and start to trade
      </h2>
      <div class="flex flex-col lg:flex-row items-center justify-center mt-10 gap-4">
        <div class="relative w-full max-w-xs lg:max-w-md">
          <input 
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
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
        <button class="bg-cyan font-semibold rounded-md text-black py-2 px-4 w-full lg:w-auto">Sign in</button>
      </div>
    </div>
  </section>
</template>

