import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ClientModule } from './client/client.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [ClientModule, CoreModule, ConfigModule.forRoot()],
})
export class AppModule {}
