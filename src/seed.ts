import AppDataSource from "./data-source";
import User from "./entities/user.entity";
import Address from "./entities/address.entity";
import ModelCar from "./entities/modelCar.entity";
import Car from "./entities/car.entity";

async function seed() {
  await AppDataSource.initialize();

  const userRepo = AppDataSource.getRepository(User);
  const addressRepo = AppDataSource.getRepository(Address);
  const modelRepo = AppDataSource.getRepository(ModelCar);
  const carRepo = AppDataSource.getRepository(Car);

  const user = userRepo.create({
    name: "Admin",
    email: "admin@example.com",
    cpf: "12345678901",
    password: "123456",
    phone: "11999999999",
    description: "Admin user",
    birthday: new Date("1990-01-01"),
    seller: true,
  });
  await userRepo.save(user);

  const address = addressRepo.create({
    cep: "12345678",
    street: "Rua Teste",
    city: "Cidade",
    number: "123",
    complement: "Apto 1",
    state: "ST",
    user,
  });
  await addressRepo.save(address);

  const model = modelRepo.create({
    branded: "Brand",
    model: "Model 1",
    year: "2020",
    fuel: "gasoline",
  });
  await modelRepo.save(model);

  const car = carRepo.create({
    km: 1000,
    price: 50000,
    color: "red",
    description: "Carro de teste",
    main_image: "image.jpg",
    user,
    modelCar: model,
  });
  await carRepo.save(car);

  console.log("Database seeded");
  await AppDataSource.destroy();
}

seed().catch((err) => {
  console.error(err);
  AppDataSource.destroy();
});