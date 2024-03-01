import express from 'express';
import router from './routes/index';

const app = express();
const port = 1245;

app.use('/', router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
