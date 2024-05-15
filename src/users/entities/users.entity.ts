import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
// import { Cart } from './cart.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  dbId: number;

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

//   @OneToOne(() => Cart)
//   @JoinColumn()
//   cart: Cart;

  @Column({ default: true })
  isActive: boolean;
}
