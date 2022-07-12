import { CarRepository } from "../../repositories/implementations/CarRepository";
import { ListCarsUseCase } from "./ListCarsUseCase";
import { ListCarsController } from "./ListCarsController";

export default (): ListCarsController => {
  const carsRepository = new CarRepository();

  const listCarsUseCase = new ListCarsUseCase(carsRepository);
  
  const listCarsController = new ListCarsController(
    listCarsUseCase
  );

  return listCarsController;
};
