import { TaskPost } from './../models/post.interfaces';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TaskPostEntity } from '../models/post.entity';
import { Observable } from 'rxjs';
export declare class TaskService {
    private readonly feedPostRepository;
    constructor(feedPostRepository: Repository<TaskPostEntity>);
    createPost(taskPost: TaskPost): Observable<TaskPost>;
    findAllPost(): Observable<TaskPost[]>;
    findFromID(id: any[]): Observable<TaskPost[]>;
    updatePost(id: number, taskPost: TaskPost): Observable<UpdateResult>;
    deletePost(id: number): Observable<DeleteResult>;
}
