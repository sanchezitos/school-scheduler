import { ClassesService } from './classses.service';
import { Class } from './classes.entity';
import { CreateClassDto } from 'src/common/dto/classes.dto';
export declare class ClassesController {
    private readonly classeservice;
    constructor(classeservice: ClassesService);
    findAll(): Promise<Class[]>;
    create(createClassDto: CreateClassDto): Promise<Class>;
    remove(id: number): Promise<void>;
}
