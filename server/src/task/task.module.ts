import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TaskService } from './services/task.service';
import { TaskController } from './controllers/task.controller';
import { TaskPostEntity } from './models/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskPostEntity])],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
