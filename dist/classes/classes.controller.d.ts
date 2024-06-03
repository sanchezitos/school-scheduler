import { ClassesService } from './classses.service';
import { Class } from './classes.entity';
import { AssignStudentsDto, AssignTeacherDto, CreateClassDto } from 'src/common/dto/classes.dto';
export declare class ClassesController {
    private readonly classeservice;
    constructor(classeservice: ClassesService);
    findAll(): Promise<Class[]>;
    findOne(id: number): Promise<Class>;
    create(createClassDto: CreateClassDto): Promise<Class>;
    assignTeacher(id: number, assignTeacherDto: AssignTeacherDto): Promise<Class>;
    assignStudents(id: number, assignStudentsDto: AssignStudentsDto): Promise<Class>;
    remove(id: number): Promise<void>;
}
