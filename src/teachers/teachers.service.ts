import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { Teacher } from './teachers.entity';


@Injectable()
export class TeachersService {
    constructor(
        @InjectRepository(Teacher)
        private teachersRepository: Repository<Teacher>,
    ) { }

    findAll(): Promise<Teacher[]> {
        return this.teachersRepository.find({ relations: ['classes'] });
    }

    findOne(id: number): Promise<Teacher> {
        return this.teachersRepository.findOne({
            where: { id },
            relations: ['classes'], // Incluye la relación 'classes'
        });
    }

    async create(teacherData: Partial<Teacher>): Promise<Teacher> {
        try {
            const newTeacher = this.teachersRepository.create(teacherData);
            return await this.teachersRepository.save(newTeacher);
        } catch (error) {
            if (error instanceof QueryFailedError && error.message.includes("Duplicate entry")) {
                throw new ConflictException('Email already exists');
            } else {
                throw error; // Re-lanza el error para otros casos
            }
        }

    }

    async update(id: number, teacherData: Partial<Teacher>): Promise<Teacher> {
        await this.teachersRepository.update(id, teacherData);
        return this.findOne(id);
    }

    async remove(id: number): Promise<Teacher> {

        const teacher = await this.teachersRepository.findOne({ where: { id } });
        if (!teacher) {
            throw new NotFoundException(`Teacher with ID ${id} not found`);
        }
        await this.teachersRepository.remove(teacher);
        return teacher;

    }
}
