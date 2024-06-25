<template>
    <section>
      <div v-if="isLoading" class="text-center mt-4">Loading...</div>
      <div v-else class="bg-bgGray w-full h-auto rounded-lg py-4">
        <div class="flex justify-between items-center">
          <p class="text-textGray ml-5">Crypto Currency</p>
          <div class="flex gap-20 ml-96 mr-72">
            <p class="text-textGray">Price</p>
            <p class="text-textGray">Change</p>
            <p class="text-textGray">Volume</p>
          </div>
        </div>
        <div class="border border-gray-800 mt-3"></div>
  
        <div v-for="(coin, index) in popularCoins" :key="coin.id" class="flex justify-between items-center m-5">
          <p>{{ coin.name }}</p>
          <div class="flex gap-20 ml-80 text-white">
            <p>{{ formatPrice(coin.quote.USD.price) }}</p>
            <p>{{ coin.quote.USD.percent_change_24h }}%</p>
            <p>{{ formatVolume(coin.quote.USD.volume_24h) }}</p>
          </div>
        </div>
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
      formatPrice(price) {
        return `$${price.toFixed(2)}`;
      },
      formatVolume(volume) {
        return `${volume.toLocaleString()} USD`;
      }
    },
    computed: {
      popularCoins() {
        // Фильтрация и сортировка по объему торгов для получения топ-6 криптовалют
        return this.coins
          .slice(0, this.popularCoinsCount) // Ограничение до первых 6 монет
          .sort((a, b) => b.quote.USD.volume_24h - a.quote.USD.volume_24h); // Сортировка по объему торгов
      }
    }
  };
  </script>
  