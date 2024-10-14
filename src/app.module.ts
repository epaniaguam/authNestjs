import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonalModule } from './personal/personal.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PersonalModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
