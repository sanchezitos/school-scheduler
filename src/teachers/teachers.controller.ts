import { Controller, Get, Post, Body, Put, Param, Delete, ValidationPipe } from '@nestjs/common';
import { CreateTeacherDto } from '../common/dto/teachers.dto'
import { TeachersService } from './teachers.service';
import { Teacher } from './teachers.entity';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) { }

  @Get()
  findAll(): Promise<Teacher[]> {
    return this.teachersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Teacher> {
    return this.teachersService.findOne(id);
  }
  @Post()
  async createTeacher(@Body(ValidationPipe) createTeacherDto: CreateTeacherDto) {
    // El cuerpo de la solicitud se valida automáticamente antes de llegar aquí
    return this.teachersService.create(createTeacherDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body(ValidationPipe) createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return this.teachersService.update(id, createTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<Teacher> {
    return this.teachersService.remove(id);
  }
}
