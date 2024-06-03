import { IsNotEmpty, IsArray, ArrayNotEmpty, IsNumber, ArrayUnique } from 'class-validator';

export class CreateClassDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  subject: string;

  teacherId: number;

  @IsArray()
  @IsNumber({}, { each: true }) // Valida que cada elemento en el array sea un número
  studentIds: number[];
}
export class AssignTeacherDto {
  @IsNotEmpty()
  teacherId: number;
}
export class AssignStudentsDto {
  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsNotEmpty({ each: true })
  studentIds: number[];
}