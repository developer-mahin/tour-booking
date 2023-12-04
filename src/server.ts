import app from './app';
import config from './config';
import mongoose from 'mongoose';

async function server() {
  try {
    await mongoose.connect(config.database as string);
    app.listen(config.port, () => {
      // eslint-disable-next-line no-console
      console.log(`app listening on port http://localhost:${config.port}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

// eslint-disable-next-line no-console
server().catch((error) => console.log(error));
