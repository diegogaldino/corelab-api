import { Router } from "express";
import createCarController from "../useCases/CreateCar";
import listCarsController from "../useCases/ListCars";
import findCarController from "../useCases/FindCar";
import deleteCarController from "../useCases/DeleteCar";
import updateCarController from "../useCases/UpdateCar";
import updateFavoriteCarController from "../useCases/UpdateFavoriteCar";
import searchCarController from "../useCases/SearchCar";

const carRoutes = Router();

carRoutes.put("/", (request, response) => {
  return updateCarController().handle(request, response);
});

carRoutes.post("/", (request, response) => {
  return createCarController().handle(request, response);
});

carRoutes.get("/", (request, response) => {
  return listCarsController().handle(request, response);
});
carRoutes.get("/search/manufacturer/:manufacturer/color/:color/year/:year/min/:priceMin/max/:priceMax", (request, response) => {
  return searchCarController().handle(request, response);
});

carRoutes.delete("/:id", (request, response) => {
  return deleteCarController().handle(request, response);
});

carRoutes.get("/:id", (request, response) => {
  return findCarController().handle(request, response);
});

carRoutes.put("/favorite", (request, response) => {
  return updateFavoriteCarController().handle(request, response);
});

export { carRoutes };
