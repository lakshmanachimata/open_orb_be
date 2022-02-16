const mongoose = require('mongoose');
const config = require('./config');
const debug = process.env.DB_DEBUG && process.env.DB_DEBUG == 'true' ? true : false;
const loggger = require('./logger.ts')
import dotenv from 'dotenv';
dotenv.config();

export const setupDB = async (inOptions : any) => {
    return new Promise((resolve, reject) => {
        let options = inOptions
        if(!inOptions){
            options = config.dbdefaultOptions;
        }
        loggger.log("db", "connecting with options" + JSON.stringify(config))

        mongoose.connect(config.dbPath, options)
        .catch(error => {
            reject(error)
            loggger.error("db", "db connection unsuccessful with error" + error + " for path " + config.dbPath)
        })
        .then(() => {
            if (debug) {
                mongoose.set('debug', true);
            }
            resolve({status: 'Success'})
            loggger.log("db", "connected to db successfully with debug option " + debug + " for path " + config.dbPath)
        });
    });
};

let db = {
    setupDB,
};
  
  export default db;

