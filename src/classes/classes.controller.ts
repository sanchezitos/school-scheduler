import { Controller, Get, Post, Body, Put, Param, Delete, ValidationPipe } from '@nestjs/common';
import { ClassesService } from './classses.service'
import { Class } from './classes.entity';
import { AssignStudentsDto, AssignTeacherDto, CreateClassDto } from 'src/common/dto/classes.dto';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classeservice: ClassesService) { }

  @Get()
  findAll(): Promise<Class[]> {
    return this.classeservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Class> {
    return this.classeservice.findOne(id);
  }

  @Post()
  create(@Body(ValidationPipe) createClassDto: CreateClassDto): Promise<Class> {
    return this.classeservice.create(createClassDto);
  }

  /* @Put(':id')
  update(@Param('id') id: number, @Body() updateClassDto: Partial<Class>): Promise<Class> {
    return this.classeservice.update(id, updateClassDto);
  }
 */
  @Post(':id/assign-teacher')
  async assignTeacher(
    @Param('id') id: number,
    @Body(ValidationPipe) assignTeacherDto: AssignTeacherDto,
  ): Promise<Class> {
    return this.classeservice.assignTeacher(id, assignTeacherDto);
  }

  @Post(':id/assign-students')
  async assignStudents(
    @Param('id') id: number,
    @Body(ValidationPipe) assignStudentsDto: AssignStudentsDto,
  ): Promise<Class> {
    return this.classeservice.assignStudents(id, assignStudentsDto);
  }
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.classeservice.remove(id);
  }
}
