import { TaskPost } from './../models/post.interfaces';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TaskPostEntity } from '../models/post.entity';
import { from, Observable } from 'rxjs';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskPostEntity)
    private readonly feedPostRepository: Repository<TaskPostEntity>,
  ) {}

  createPost(taskPost: TaskPost): Observable<TaskPost> {
    return from(this.feedPostRepository.save(taskPost));
  }

  findAllPost(): Observable<TaskPost[]> {
    return from(this.feedPostRepository.find());
  }

  findFromID(id: any[]): Observable<TaskPost[]> {
    return from(this.feedPostRepository.findByIds(id));
  }

  updatePost(id: number, taskPost: TaskPost): Observable<UpdateResult> {
    return from(this.feedPostRepository.update(id, taskPost));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.feedPostRepository.delete(id));
  }
}
