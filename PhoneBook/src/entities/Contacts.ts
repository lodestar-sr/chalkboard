import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString, IsEmail } from 'class-validator';

@Entity('contacts')
export class Contacts extends BaseEntity {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column()
  name: string;

  @IsEmail()
  @Column({ unique: true })
  emailAddress: string;

  @Column({ unique: true })
  mailAddress: string;

  @IsString()
  @Column()
  workNumber: string;

  @IsString()
  @Column()
  homeNumber: string;

  @IsString()
  @Column()
  mobileNumber: string;

  @IsString()
  @Column()
  otherNumber: string;
}
