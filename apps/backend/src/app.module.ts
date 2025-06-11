import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ProjectModule } from './project/project.module';
import { AllocationsModule } from './allocations/allocations.module';

@Module({
  imports: [UserModule, ProjectModule, AllocationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
