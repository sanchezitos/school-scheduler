import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Teacher } from '../teachers/teachers.entity';
import { Student } from '../students/students.entity';

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  subject: string;

/*   @Column()
  schedule: string; */

  @ManyToOne(() => Teacher, teacher => teacher.classes)
  teacher: Teacher;

  @ManyToMany(() => Student, student => student.classes)
  @JoinTable()
  students: Student[];
}
