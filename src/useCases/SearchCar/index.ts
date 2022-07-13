import { CarRepository } from "../../repositories/implementations/CarRepository";
import { SearchCarController } from "./SearchCarController";
import { SearchCarUseCase } from "./SearchCarUseCase";

export default (): SearchCarController => {
  const carsRepository = new CarRepository();

  const searchCarUseCase = new SearchCarUseCase(carsRepository);
  
  const searchCarController = new SearchCarController(
    searchCarUseCase
  );

  return searchCarController;
};
