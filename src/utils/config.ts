module.exports.dbPath = process.env.DB_PATH || 'mongodb://localhost:27017/UserApp';

module.exports.dbdefaultOptions = {
    useNewUrlParser: process.env.USE_NEW_URL_PARSER || true,
    useUnifiedTopology: process.env.USE_UNIFIED_TOPOLOGY || true,
    connectTimeoutMS : process.env.DB_CONN_TIMEOUT || 30000,
    zlibCompressionLevel : process.env.ZLIB_COMPR_LEVEL || 6,
    maxPoolSize :  process.env.MAX_POOL_SIZE || 50,
}