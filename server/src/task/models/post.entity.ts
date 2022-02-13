import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('task')
export class TaskPostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  explanation: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: false })
  status: boolean;

  @Column({ type: 'timestamp', default: () => 'NOW()' })
  createdAt: Date;
}
