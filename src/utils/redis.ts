import Redis from 'ioredis';
import { getConfigForRedis } from './redisconfig';
import { IRedisConfig } from './ioredismodel';

class RedisClient {
  connected = false;
  client: Redis.Redis = null;
  config: IRedisConfig = null;
  constructor() {
    this.config = getConfigForRedis();
    this.connected = false;
    this.client = null;
  }
  getConnection() {
    if (this.connected) return this.client;
    else {
      this.client = new Redis(this.config);
      this.connected = true;
      return this.client;
    }
  }
}
const newClient = new RedisClient();

export default newClient.getConnection();