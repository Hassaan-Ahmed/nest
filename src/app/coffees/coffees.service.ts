import { Injectable, Logger } from "@nestjs/common";
import { JSONObject } from "@root/common/interfaces";
import { CreateCoffeeDto } from "./dto/create-coffee.dto";

@Injectable()
export class CoffeesService {
  //eslint-disable-next-line
  constructor() {}
  public getCoffees(): string {
    Logger.log("in coffees service");
    return "this is coffees route.";
  }

  public postCoffees(body: CreateCoffeeDto): JSONObject {
    Logger.log(`in create coffees with data: ${body}`);
    return { statusCode: 201, message: "Coffee created.", data: ![body] };
  }
}
