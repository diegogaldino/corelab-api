import { prismaClient } from "../../database/prismaClient";
import { Car } from "../../entities/Car";
import { ICarRepository, ICarDTO, IFavoriteCarDTO, ICarSearchDTO } from "../ICarRepository";

class CarRepository implements ICarRepository {

  async create({ model, manufacturer, description, color, favorite, license, year, price }: ICarDTO): Promise<void> {
    const car = await prismaClient.car.create({
      data: {
        model,
        manufacturer,
        color,
        description,
        favorite,
        license,
        price,
        year
      }
    });
  }

  async list(): Promise<Car[]> {
    const cars = await prismaClient.car.findMany();

    return cars;
  }

  async findById(id: string): Promise<Car> {
    const car = await prismaClient.car.findUnique({ where: { id } });

    return car;
  }

  async findByOptions({ manufacturer, color, year, priceMin, priceMax }: ICarSearchDTO): Promise<Car[]> {
    const cars = await prismaClient.car.findMany({ where:{ manufacturer, color, year, price:{ gte: priceMin, lte: priceMax }}});

    return cars;
  }

  async deleteById(id: string): Promise<void> {

    const car = await prismaClient.car.delete({ where: { id } });

  }

  async updateById({id, model, manufacturer, description, color, favorite, license, year, price }: ICarDTO): Promise<void> {
    const car = await prismaClient.car.update({ 
      where: { id },
      data: {
        model,
        manufacturer,
        color,
        description,
        favorite,
        license,
        price,
        year
      }
    });
  }

  async updateFavoriteById({id, favorite }: IFavoriteCarDTO): Promise<void> {

    const car = await prismaClient.car.update({ 
      where: { id },
      data: {
        favorite,
      }
    });
  }
}

export { CarRepository };
