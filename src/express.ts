import express from 'express';
import passport from "passport"

import { appapiMiddleware, clientapiMiddleware, openapiMiddleware } from './utils/middleware';
import compression from 'compression';
import logger from './utils/logger';
import dotenv from 'dotenv';
import setupSwagger from './utils/swagger';
import { checkIfValidationError, checkIfValidJSON } from './utils/validators';

dotenv.config();

const env = process.env.NODE_ENV || 'development';

export default async () => {
  const app = express();
  const router = express.Router();
  app.use(router);

  /*
    Setting up Swagger
  */
  await setupSwagger(app);

  app.use('/hnoapi', openapiMiddleware)
  app.use('/hncapi', clientapiMiddleware)
  app.use('/hnpapi', appapiMiddleware)

  // app.use('/hnowapi', openapiMiddleware)
  // app.use('/hncwapi', clientapiMiddleware)
  // app.use('/hnpwapi', appapiMiddleware)

  app.use(express.json());
  app.use(express.urlencoded());
  app.use(compression());
  // app.use(passport.initialize())
  // app.use(passport.session())
  /*
    we are exposing REST endpoints defined in the below files
  */

  /* 
    Catching uncaught errors
  */
  app.use(function (err, req, res, next) {
    if (err) {
      logger.error("express", err);
      logger.error("express", req.body);
      logger.error("express", req.query);
      logger.error("express", req.params);
      if (checkIfValidationError(err)) {
        return res.status(400).json({ status: err.statusCode, message: err.error, details: err.details });
      }
      if (checkIfValidJSON(err)) {
        return res.status(400).json({ status: err.statusCode, message: 'Invalid / Malformed JSON', details: err.body });
      }
      return res.status(500).json({ status: 500, message: 'Server Error' });
    } else {
      next();
    }
  });

  require("./controllers/common")(app);
  require("./controllers/auth")(app);


  app.listen({ port: process.env.PORT || 4000 }, () => {
    logger.log("app",`Server ready at http://localhost:${process.env.PORT || 4000}`);
    return app;
  });
};