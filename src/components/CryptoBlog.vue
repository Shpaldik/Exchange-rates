<template>
  <section class="px-4 lg:px-16 xl:px-32 py-10">
    <div v-if="isLoading" class="text-center mt-4 text-white">Loading...</div>
    <div v-else class="bg-bgGray w-full h-auto rounded-lg border border-gray-800 py-4">
      <div class="flex flex-col justify-center items-center mb-3 lg:flex-row lg:justify-between lg:items-center px-5">
        <p class="text-textGray w-full text-center lg:w-auto lg:text-left mb-2 lg:mb-0">Asset</p>
        <div class="hidden lg:flex lg:flex-row w-full lg:w-auto justify-between lg:gap-32 xl:mr-60 lg:mr-60">
          <p class="text-textGray text-center lg:text-left mb-2 lg:mb-0">Price</p>
          <p class="text-textGray text-center lg:text-left mb-2 lg:mb-0">Change</p>
          <p class="text-textGray text-center lg:text-left mb-2 lg:mb-0">Volume</p>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-3"></div>

      <div v-for="(coin, index) in popularCoins" :key="coin.id" class="flex flex-col justify-center items-center py-3 px-5 border-b border-gray-800 lg:flex-row lg:justify-between lg:items-center">
        <div class="flex items-center gap-3 mb-2 lg:mb-0 w-full lg:w-auto justify-center lg:justify-start">
          <img :src="formatImageUrl(coin)" alt="coin logo" class="w-6 h-6">
          <p class="text-white">{{ coin.name }}</p>
        </div>
        <div class="flex flex-col lg:flex-row items-center gap-2 lg:gap-20 text-white w-full lg:w-auto justify-center lg:justify-between lg:text-left">
          <p class="text-center lg:text-left">{{ formatPrice(coin.quote.USD.price) }}</p>
          <p :class="changeColorClass(coin.quote.USD.percent_change_24h)" class="text-center lg:text-left">
            {{ coin.quote.USD.percent_change_24h }}%
          </p>
          <p class="text-center lg:text-left">{{ formatVolume(coin.quote.USD.volume_24h) }}</p>
          <button class="border border-cyan rounded-lg text-cyan py-2 px-4 w-full lg:w-auto">Trade</button>
        </div>
      </div>
    </div>
    <a href="https://coinmarketcap.com/" class="block mt-5">
      <button id="btn" class="bg-btnBead rounded-lg text-white w-full py-2 px-4">All assets</button>
    </a>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      coins: [],
      isLoading: false,
      apiKey: '11ba263a-2927-4a74-81fb-d071f57726dc',
      apiUrl: '/api/v1/cryptocurrency/listings/latest',
      popularCoinsCount: 6,
      updateInterval: 60000
    };
  },
  created() {
    this.fetchCryptoData();
    this.startAutoUpdate();
  },
  beforeDestroy() {
    this.stopAutoUpdate();
  },
  methods: {
    async fetchCryptoData() {
      try {
        this.isLoading = true;
        const response = await axios.get(this.apiUrl);
        this.coins = response.data.data;
        this.isLoading = false;
      } catch (error) {
        console.error('Ошибка при загрузке данных криптовалют:', error);
        this.isLoading = false;
      }
    },
    formatImageUrl(coin) {
      return `https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`;
    },
    formatPrice(price) {
      return `$${price.toFixed(2)}`;
    },
    formatVolume(volume) {
      return `${volume.toLocaleString()} USD`;
    },
    changeColorClass(percentChange) {
      if (percentChange < 0) {
        return 'text-red-500';
      } else if (percentChange > 0) {
        return 'text-green-500';
      } else {
        return 'text-textGray';
      }
    },
    startAutoUpdate() {
      this.updateIntervalId = setInterval(this.fetchCryptoData, this.updateInterval);
    },
    stopAutoUpdate() {
      clearInterval(this.updateIntervalId);
    }
  },
  computed: {
    popularCoins() {
      return this.coins
        .slice(0, this.popularCoinsCount)
        .sort((a, b) => b.quote.USD.price - a.quote.USD.price);
    }
  }
};
</script>

<style scoped>
#btn {
  background: radial-gradient(100% 100% at 50% 0%, #26314E 0%, #1E253C 100%);
}

@media (max-width: 768px) {
  .flex-col {
    flex-direction: column !important;
  }
}
</style>
