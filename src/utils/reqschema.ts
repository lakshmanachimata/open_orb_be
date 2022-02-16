
const Joi = require('joi'); // Joi does not work with import *


export const GAuthBody = Joi.object({
    idToken: Joi.string().required(),
    accessToken: Joi.string().required(),
    displayName: Joi.string().required(),
    email: Joi.string().required(),
    id: Joi.string().required(),
    photoUrl: Joi.string().required(),
    serverAuthCode : Joi.string().required(),
  });

  export const GAuthRequest = {
    body: GAuthBody,
  };