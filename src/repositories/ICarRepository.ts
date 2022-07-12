import { Car } from "../entities/Car";

interface ICarDTO {
  id?:string;
  manufacturer: string;
  model: string;
  color: string;
  description: string;
  year: number;
  price: number;
  license: string;
  favorite: boolean;
}

interface IFavoriteCarDTO {
  id:string;
  favorite: boolean;
}

interface ICarRepository {
  findById(id: string): Promise<Car>;
  deleteById(id: string): Promise<void>;
  updateById({id, model, manufacturer, description, color, year, license, favorite,price }: ICarDTO): Promise<void>;
  updateFavoriteById({id, favorite }: IFavoriteCarDTO): Promise<void>;
  list(): Promise<Car[]>;
  create({ model, manufacturer, description, color, year, license, favorite,price }: ICarDTO): Promise<void>;
}

export { ICarRepository, ICarDTO, IFavoriteCarDTO };
