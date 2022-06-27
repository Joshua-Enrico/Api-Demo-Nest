import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [ClientModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
