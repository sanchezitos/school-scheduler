import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, CreateDateColumn } from 'typeorm';
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

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' }) // Define el campo de fecha de creación
  createdAt: Date;

  @ManyToMany(() => Class, (classEntity) => classEntity.students)
  classes: Class[];
}
