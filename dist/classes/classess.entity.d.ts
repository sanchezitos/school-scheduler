import { Teacher } from '../teachers/teachers.entity';
import { Student } from '../students/studens.entity';
export declare class Class {
    id: number;
    name: string;
    subject: string;
    schedule: string;
    teacher: Teacher;
    students: Student[];
}
