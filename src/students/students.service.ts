import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { Student } from './students.entity';


@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
    ) { }

    findAll(): Promise<Student[]> {
        return this.studentRepository.find({});
    }

    findOne(id: number): Promise<Student> {
        return this.studentRepository.findOne({
            where: { id }, 
        });
    }

    async create(studentData: Partial<Student>): Promise<Student> {
        try {
            const newStudent = this.studentRepository.create(studentData);
            return await this.studentRepository.save(newStudent);
        } catch (error) {
            if (error instanceof QueryFailedError && error.message.includes("Duplicate entry")) {
                throw new ConflictException('Email already exists');
            } else {
                throw error; // Re-lanza el error para otros casos
            }
        }

    }

      async update(id: number, studentData: Partial<Student>): Promise<Student> {
       await this.studentRepository.update(id, studentData);
       return this.findOne(id);
     } 

    
     async remove(id: number): Promise<Student> {

        const student = await this.studentRepository.findOne({ where: { id } });
        if (!student) {
            throw new NotFoundException(`Student with ID ${id} not found`);
        }
        await this.studentRepository.remove(student);
        return student;

    }
}
