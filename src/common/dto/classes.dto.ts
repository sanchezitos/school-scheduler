import { IsNotEmpty, IsArray, ArrayNotEmpty, IsNumber } from 'class-validator';

export class CreateClassDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  subject: string;

  @IsNotEmpty()
  teacherId: number;

  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true }) // Valida que cada elemento en el array sea un número
  studentIds: number[];
}