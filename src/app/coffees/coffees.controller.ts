import { Body, Controller, Get, Logger, Post } from "@nestjs/common";
import { JSONObject } from "@root/common/interfaces";
import { CoffeesService } from "./coffees.service";
import { CreateCoffeeDto } from "./dto/create-coffee.dto";

@Controller("coffees")
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  coffees(): string {
    Logger.log("in coffees controller");
    return this.coffeesService.getCoffees();
  }

  @Post()
  createCoffee(@Body() createCoffee: CreateCoffeeDto): JSONObject {
    return this.coffeesService.postCoffees(createCoffee);
  }
}
