/* eslint-disable no-console */
import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function server() {
  try {
    await mongoose.connect(config.database as string).then(() => {
      console.log('Database connected successfully');
    });
    app.listen(config.port, () => {
      console.log(`app listening on port http://localhost:${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

server().catch((error) => console.log(error));
