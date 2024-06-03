import { Class } from '../classes/classes.entity';
export declare class Student {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: Date;
    classes: Class[];
}
