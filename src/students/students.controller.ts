import { Controller, Get, Post, Body, Put, Param, Delete, ValidationPipe } from '@nestjs/common';
import { CreateStudentDto } from '../common/dto/students.dto'
import { StudentsService } from './students.service';
import { Student } from './students.entity';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) { }

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Student> {
    return this.studentService.findOne(id);
  }
  @Post()
  async createStudent(@Body(ValidationPipe) createStudentDto: CreateStudentDto) {
    // El cuerpo de la solicitud se valida automáticamente antes de llegar aquí
    return this.studentService.create(createStudentDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentService.update(id, createStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<Student> {
    return this.studentService.remove(id);
  }
}
