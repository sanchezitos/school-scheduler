import { classeservice } from './classsess.service';
import { Class } from './classes.entity';
export declare class ClassesController {
    private readonly classeservice;
    constructor(classeservice: classeservice);
    findAll(): Promise<Class[]>;
    create(createClassDto: Partial<Class>): Promise<Class>;
    remove(id: number): Promise<void>;
}
