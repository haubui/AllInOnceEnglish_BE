import { registerAs } from '@nestjs/config';

export const CacheConfigName = 'redis_aio'; // Obtain redis service name from docker compose to automatically bind ip address to application where it was started to run

export interface CacheConfig {
  host: string;
  port: number;
  password: string;
  ttl: number;
}

export default registerAs(CacheConfigName, () => ({
  host: process.env.REDIS_HOST || '',
  port: process.env.REDIS_PORT || '',
  password: process.env.REDIS_PASSWORD || '',
  minPoolSize: parseInt(process.env.REDIS_TTL || '60'),
}));
