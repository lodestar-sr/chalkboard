import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString, IsEmail } from 'class-validator';

@Entity('users')
export class Users extends BaseEntity {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @IsEmail()
  @Column({ unique: true })
  emailAddress: string;

  @IsString()
  @Column()
  password: string;

  @Column()
  verified: boolean;
}
