import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassesService } from './classses.service';
import { ClassesController } from './classes.controller';
import { Class } from './classes.entity';
import { Teacher } from '../teachers/teachers.entity';
import { Student } from '../students/students.entity';
import { TeachersModule } from '../teachers/teachers.module';
import { StudentsModule } from '../students/students.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Class, Teacher, Student]),
    TeachersModule,
    StudentsModule,
  ],
  providers: [ClassesService],
  controllers: [ClassesController],
})
export class ClassesModule {}
