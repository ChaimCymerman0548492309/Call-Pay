import { Column } from 'typeorm';

export class CreateUserDto {
  
  @Column({ unique: true })
  userId: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  phone: string;

  @Column({ type: 'date' })
  birthDate: Date;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
