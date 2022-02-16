import dotenv from 'dotenv';
dotenv.config();

const env = process.env.NODE_ENV || 'development';

export const openapiMiddleware = async function (req, res, next) {
  return next();
};

export const clientapiMiddleware = async function (req, res, next) {
  return next();
};
export const appapiMiddleware = async function (req, res, next) {
  return next();
};

let middleware = {
  openapiMiddleware,
  clientapiMiddleware,
  appapiMiddleware
};

export default middleware;
