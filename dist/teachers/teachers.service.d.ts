import { Repository } from 'typeorm';
import { Teacher } from './teachers.entity';
export declare class TeachersService {
    private teachersRepository;
    constructor(teachersRepository: Repository<Teacher>);
    findAll(): Promise<Teacher[]>;
    findOne(id: number): Promise<Teacher>;
    create(teacherData: Partial<Teacher>): Promise<Teacher>;
    update(id: number, teacherData: Partial<Teacher>): Promise<Teacher>;
    remove(id: number): Promise<Teacher>;
}
