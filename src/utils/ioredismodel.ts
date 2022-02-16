import { RedisOptions } from 'ioredis';

export interface IRedisConfig extends RedisOptions {
  host?: string;
  name?: string;
  password?: string;
  port?: number;
  sentinelPassword?: string;
  auth_pass?: string;
  sentinels?: ISentinel[];
}

export interface ISentinel {
  host: string;
  port: number;
}
