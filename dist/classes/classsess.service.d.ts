import { Repository } from 'typeorm';
import { Class } from './classes.entity';
export declare class classeservice {
    private classesRepository;
    constructor(classesRepository: Repository<Class>);
    findAll(): Promise<Class[]>;
    create(classData: Partial<Class>): Promise<Class>;
    remove(id: number): Promise<void>;
}
