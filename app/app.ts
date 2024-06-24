import express from 'express';
import axios from 'axios';
import { getToastApiToken } from './utils';

const app = express();
const port = process.env.PORT || 3000;

app.get('/index', (req, res) => {
  res.send('Hello World!');
});

app.get('/order/:guid', async (req, res) => {
  const token = await getToastApiToken(process.env.CLIENT_ID, process.env.CLIENT_SECRET);
  const orderGuid = req.params.guid;
  try {
    const response = await axios.get(`https://[toast-api-hostname]/orders/v2/orders/${orderGuid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching order details');
  }
});

app.get('/orders', async (req, res) => {
  const token = await getToastApiToken(process.env.CLIENT_ID, process.env.CLIENT_SECRET);
  const { startDate, endDate } = req.query;
  try {
    const response = await axios.get(`https://[toast-api-hostname]/orders/v2/ordersBulk?startDate=${startDate}&endDate=${endDate}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching multiple orders details');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
