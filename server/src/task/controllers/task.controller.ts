import { TaskService } from './../services/task.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskPost } from '../models/post.interfaces';
import { Observable } from 'rxjs';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Post()
  create(@Body() post: TaskPost): Observable<TaskPost> {
    return this.taskService.createPost(post);
  }

  @Get()
  findAll(): Observable<TaskPost[]> {
    return this.taskService.findAllPost();
  }

  @Get(':id')
  findFromID(@Param('id') id: any[]): Observable<TaskPost[]> {
    return this.taskService.findFromID(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() taskPost: TaskPost,
  ): Observable<UpdateResult> {
    return this.taskService.updatePost(id, taskPost);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.taskService.deletePost(id);
  }
}
