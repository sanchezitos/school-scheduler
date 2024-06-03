import { Repository } from 'typeorm';
import { Class } from './classes.entity';
import { Teacher } from '../teachers/teachers.entity';
import { Student } from '../students/students.entity';
import { CreateClassDto } from '../common/dto/classes.dto';
export declare class ClassesService {
    private classesRepository;
    private teachersRepository;
    private studentsRepository;
    constructor(classesRepository: Repository<Class>, teachersRepository: Repository<Teacher>, studentsRepository: Repository<Student>);
    create(createClassDto: CreateClassDto): Promise<Class>;
    findAll(): Promise<Class[]>;
    findOne(id: number): Promise<Class>;
    remove(id: number): Promise<void>;
}
