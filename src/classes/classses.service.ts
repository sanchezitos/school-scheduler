import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Class } from './classes.entity';
import { Teacher } from '../teachers/teachers.entity';
import { Student } from '../students/students.entity';
import { AssignStudentsDto, AssignTeacherDto, CreateClassDto } from '../common/dto/classes.dto';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Class)
    private classesRepository: Repository<Class>,
    @InjectRepository(Teacher)
    private teachersRepository: Repository<Teacher>,
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
  ) { }

  async create(createClassDto: CreateClassDto): Promise<Class> {
    const { teacherId, studentIds, ...classData } = createClassDto;

    // Fetch teacher
    const teacher = await this.teachersRepository.findOne({ where: { id: teacherId } });
    if (!teacher) {
      throw new NotFoundException(`Teacher with ID ${teacherId} not found`);
    }

    // Fetch students
    const students = await this.studentsRepository.findBy({ id: In(studentIds as unknown as number[]) });
    if (students.length !== studentIds.length) {
      throw new NotFoundException(`Some students not found`);
    }

    // Create class with teacher and students
    const newClass = this.classesRepository.create({ ...classData, teacher, students });
    return this.classesRepository.save(newClass);
  }

  async findAll(): Promise<Class[]> {
    return this.classesRepository.find({ relations: ['teacher', 'students'] });
  }

  async findOne(id: number): Promise<Class> {
    return this.classesRepository.findOne({ where: { id }, relations: ['teacher', 'students'] });
  }

  async assignTeacher(id: number, assignTeacherDto: AssignTeacherDto): Promise<Class> {
    const { teacherId } = assignTeacherDto;
    const classEntity = await this.classesRepository.findOne({ where: { id }, relations: ['teacher', 'students'] });

    if (!classEntity) {
      throw new NotFoundException(`Class with ID ${id} not found`);
    }

    const teacher = await this.teachersRepository.findOne({ where: { id: teacherId } });
    if (!teacher) {
      throw new NotFoundException(`Teacher with ID ${teacherId} not found`);
    }

    classEntity.teacher = teacher;
    return this.classesRepository.save(classEntity);
  }

  async assignStudents(id: number, assignStudentsDto: AssignStudentsDto): Promise<Class> {
    const { studentIds } = assignStudentsDto;
    const classEntity = await this.classesRepository.findOne({ where: { id }, relations: ['teacher', 'students'] });

    if (!classEntity) {
      throw new NotFoundException(`Class with ID ${id} not found`);
    }

    const students = await this.studentsRepository.findBy({ id: In(studentIds) });
    if (students.length !== studentIds.length) {
      throw new NotFoundException(`One or more students not found`);
    }

    classEntity.students = [...students];
    return this.classesRepository.save(classEntity);
  }

  async remove(id: number): Promise<void> {
    const classEntity = await this.classesRepository.findOne({ where: { id } });
    if (!classEntity) {
      throw new NotFoundException(`Class with ID ${id} not found`);
    }
    await this.classesRepository.remove(classEntity);
  }
}
