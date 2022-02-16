import dotenv from 'dotenv';
import expressSetup from './express';
import db from './utils/db';
import infraSetup from './utils/infra';
import logger from './utils/logger';

dotenv.config();

const setupServer = async () => {
  try {
    await db.setupDB(undefined);
    await expressSetup();
    await infraSetup();
    logger.log("app"," server setup done")
  } catch (error) {
    logger.error("app"," server failed with error " + error)
    process.exit(0);
  }
};

setupServer();
