import { Repository } from 'typeorm';
import { Student } from './students.entity';
export declare class StudentsService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    findAll(): Promise<Student[]>;
    findOne(id: number): Promise<Student>;
    create(studentData: Partial<Student>): Promise<Student>;
    update(id: number, studentData: Partial<Student>): Promise<Student>;
    remove(id: number): Promise<Student>;
}
