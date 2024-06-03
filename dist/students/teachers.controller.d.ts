import { CreateTeacherDto } from '../common/dto/teachers.dto';
import { TeachersService } from './teachers.service';
import { Teacher } from './teachers.entity';
export declare class TeachersController {
    private readonly teachersService;
    constructor(teachersService: TeachersService);
    findAll(): Promise<Teacher[]>;
    findOne(id: number): Promise<Teacher>;
    createTeacher(createTeacherDto: CreateTeacherDto): Promise<any>;
    remove(id: number): Promise<void>;
}
