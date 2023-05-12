import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import User from "./user.entity";
import ModelsCar from "./modelCar.entity";
import Image from "./image.entity";
import Comment from "./comment.entity";

@Entity("cars")
class Car {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  km: number;

  @Column()
  price: number;

  @Column()
  color: string;

  @Column()
  description: string;

  @Column()
  main_image: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => User, (user) => user.cars, { onDelete: "CASCADE" })
  user: User;

  @ManyToOne(() => ModelsCar, (model) => model.cars)
  model_car: ModelsCar;

  @OneToMany(() => Image, (image) => image.car, { cascade: true })
  images: Image[];

  @OneToMany(() => Comment, (comment) => comment.car, { cascade: true })
  comments: Comment[];
}

export default Car;
