import express from 'express';
import productRouter from './routes/product.route';
import orderRouter from './routes/order.route';
import loginRouter from './routes/login.route';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

export default app;
