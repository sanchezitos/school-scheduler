import { CreateStudentDto } from '../common/dto/students.dto';
import { StudentsService } from './students.service';
import { Student } from './students.entity';
export declare class StudentsController {
    private readonly studentService;
    constructor(studentService: StudentsService);
    findAll(): Promise<Student[]>;
    findOne(id: number): Promise<Student>;
    createStudent(createStudentDto: CreateStudentDto): Promise<Student>;
    update(id: number, createStudentDto: CreateStudentDto): Promise<Student>;
    remove(id: number): Promise<Student>;
}
