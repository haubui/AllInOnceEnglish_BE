import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import serverConfig from './config/server.config';
import databaseConfig from './config/database.config';
import authkeyConfig from './config/authkey.config';
import tokenConfig from './config/token.config';
import diskConfig from './config/disk.config';
import cacheConfig from './config/cache.config';
import { DatabaseFactory } from './setup/database.factory';
import { WinstonLogger } from './setup/winston.logger';
import { RedisCacheModule } from './cache/redis-cache.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [
        serverConfig,
        databaseConfig,
        cacheConfig,
        authkeyConfig,
        tokenConfig,
        diskConfig,
      ],
      cache: true,
      envFilePath: getEnvFilePath(),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseFactory,
    }),
    RedisCacheModule,
    CoreModule,
    AuthModule,
    FilesModule,
  ],
  providers: [
    {
      provide: 'Logger',
      useClass: WinstonLogger,
    },
  ],
})
export class AppModule {}

function getEnvFilePath() {
  return process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
}
