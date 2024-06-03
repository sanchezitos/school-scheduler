import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Class } from '../classes/classes.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @ManyToMany(() => Class, (classEntity) => classEntity.students)
  classes: Class[];
}
