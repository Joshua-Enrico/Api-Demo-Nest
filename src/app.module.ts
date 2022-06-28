import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ClientModule } from './client/client.module';
import { CoreModule } from './core/core.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [ClientModule, CoreModule, ConfigModule.forRoot(), ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public'),
    exclude: ['/api*'],
  }),],
})
export class AppModule {}
