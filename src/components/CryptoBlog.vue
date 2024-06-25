<template>
  <section>
    <div class="mx-32">
      <div v-if="isLoading" class="text-center mt-4">Loading...</div>
        <div v-else class="bg-bgGray w-full h-auto rounded-lg border border-gray-800 py-1">
            <div class="flex justify-between items-center">
                <p class="text-textGray ml-5">Asset</p>
                  <div class="flex gap-32 ml-96 mr-72">
                    <p class="text-textGray">Price</p>
                    <p class="text-textGray">Change</p>
                    <p class="text-textGray">Volume</p>
                  </div>
            </div>
      <div class="border border-gray-800 mt-3"></div>

      <div v-for="(coin, index) in popularCoins" :key="coin.id" class="flex justify-between items-center m-5  border-b border-gray-800">
        <p class="text-white">{{ coin.name }}</p>
        <div class="flex gap-20 text-white mr-10">
          <img src="" alt="">
          <p>{{ formatPrice(coin.quote.USD.price) }}</p>
          <p :class="changeColorClass(coin.quote.USD.percent_change_24h)">
            {{ coin.quote.USD.percent_change_24h }}%
          </p>
          <p>{{ formatVolume(coin.quote.USD.volume_24h) }}</p>
          <button class="border border-cyan rounded-lg text-cyan py-2 px-4 mb-3">Trade</button>
        </div>
      </div>
    </div>

    <a href="https://coinmarketcap.com/"><button id="btn" class="bg-btnBead rounded-lg text-white w-full py-2 px-4 mt-5">All assets</button></a>
    </div>

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
      apiUrl: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      popularCoinsCount: 6 // Количество популярных монет для отображения
    };
  },
  created() {
    this.fetchCryptoData();
  },
  methods: {
    async fetchCryptoData() {
      try {
        this.isLoading = true;
        const response = await axios.get(this.apiUrl, {
          headers: {
            'X-CMC_PRO_API_KEY': this.apiKey
          }
        });
        this.coins = response.data.data;
        this.isLoading = false;
      } catch (error) {
        console.error('Ошибка при загрузке данных криптовалют:', error);
        this.isLoading = false;
      }
    },
    format (img) {
      return `$${img.logo_url}`
      
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
        return 'text-textGray'; // Цвет по умолчанию, если процентное изменение равно 0
      }
    }
  },
  computed: {
  popularCoins() {
    // Sort coins by price in descending order
    return this.coins
      .slice(0, this.popularCoinsCount) // Limit to the first 6 coins
      .sort((a, b) => b.quote.USD.price - a.quote.USD.price); // Sort by USD price
  }
}

};
</script>

<style>
#btn {
  background: radial-gradient(100% 100% at 50% 0%, #26314E 0%, #1E253C 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

}
</style>