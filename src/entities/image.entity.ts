import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  BeforeUpdate,
  BeforeInsert,
  OneToMany,
  ManyToOne,
} from "typeorm";
import Car from "./car.entity";

@Entity("images")
class Image {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  image_url: string;

  @ManyToOne(() => Car, (car) => car.images, { onDelete: "CASCADE" })
  car: Car;
}

export default Image;
