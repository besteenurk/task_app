import { TaskService } from './../services/task.service';
import { TaskPost } from '../models/post.interfaces';
import { Observable } from 'rxjs';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    create(post: TaskPost): Observable<TaskPost>;
    findAll(): Observable<TaskPost[]>;
    findFromID(id: any[]): Observable<TaskPost[]>;
    update(id: number, taskPost: TaskPost): Observable<UpdateResult>;
    delete(id: number): Observable<DeleteResult>;
}
