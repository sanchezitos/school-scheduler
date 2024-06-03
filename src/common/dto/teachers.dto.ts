import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateTeacherDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
  
}