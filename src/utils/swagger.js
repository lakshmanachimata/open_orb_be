"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerUi = __importStar(require("swagger-ui-express"));
dotenv_1.default.config();
const env = process.env.NODE_ENV || 'development';
const swaggerDefinition = {
    info: {
        title: 'homenet app from nearhop',
        version: '1.0.0',
        description: 'homenet app from nearhop for private VPN',
    },
    host: dotenv_1.default.config,
    basePath: 'hnapi/',
};
const SwaggerOptions = {
    definition: swaggerDefinition,
    // path to the API docs
    apis: ['*/routes/*.ts', '*/routes/*.js'],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(SwaggerOptions);
const setupSwagger = (app) => __awaiter(void 0, void 0, void 0, function* () {
    if (env != 'production') {
        app.use(`hnapi/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
        app.use(`hnapi/api-json`, (req, res) => {
            res.send(swaggerSpec);
        });
    }
});
exports.setupSwagger = setupSwagger;
exports.default = exports.setupSwagger;
//# sourceMappingURL=swagger.js.map