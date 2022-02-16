import dotenv from 'dotenv';
import swaggerJSDoc from 'swagger-jsdoc';
import * as swaggerUi from 'swagger-ui-express';

dotenv.config();

const env = process.env.NODE_ENV || 'development';

const swaggerDefinition = {
  info: {
    title: 'homenet app from nearhop',
    version: '1.0.0',
    description: 'homenet app from nearhop for private VPN',
  },
  host: dotenv.config,
  basePath: 'hnapi/',
};

const SwaggerOptions = {
  definition: swaggerDefinition,
  // path to the API docs
  apis: ['*/routes/*.ts', '*/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(SwaggerOptions);
export const setupSwagger = async (app): Promise<void> => {
  if (env != 'production') {
    app.use(`hnapi/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.use(`hnapi/api-json`, (req, res) => {
      res.send(swaggerSpec);
    });
  }
};
export default setupSwagger;
