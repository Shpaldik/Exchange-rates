const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/v1/cryptocurrency/listings/latest', async (req, res) => {
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': '11ba263a-2927-4a74-81fb-d071f57726dc'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Ошибка при получении данных от CoinMarketCap API:', error);
    res.status(error.response.status || 500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Сервер прокси запущен на http://localhost:${port}`);
});
