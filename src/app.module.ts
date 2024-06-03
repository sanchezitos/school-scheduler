import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StudentsModule } from './students/students.module'
import { TeachersModule } from './teachers/teachers.module';
import { ClassesModule } from './classes/classses.module'
import { Student } from './students/students.entity';
import { Teacher } from './teachers/teachers.entity';
import { Class } from './classes/classes.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que el módulo de configuración esté disponible globalmente
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [Student, Teacher, Class],
        synchronize: true, // Para desarrollo, no para producción
      }),
    }),

    TeachersModule, StudentsModule, ClassesModule],
})
export class AppModule { }