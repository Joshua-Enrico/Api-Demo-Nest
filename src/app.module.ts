import { Module } from '@nestjs/common';

import { ClientModule } from './client/client.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [ClientModule, CoreModule],
})
export class AppModule {}
