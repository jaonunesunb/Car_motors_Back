import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import Car from "./car.entity";

@Entity("models_cars")
class ModelsCar {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 127 })
  branded: string;

  @Column({ length: 127 })
  model: string;

  @Column({ length: 4 })
  year: string;

  @Column()
  fuel: string;

  @OneToMany(() => Car, (car) => car.model_car)
  cars: Car[];
}

export default ModelsCar;
