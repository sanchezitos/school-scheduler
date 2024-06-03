import { Teacher } from '../teachers/teachers.entity';
import { Student } from '../students/students.entity';
export declare class Class {
    id: number;
    name: string;
    subject: string;
    teacher: Teacher;
    students: Student[];
}
