import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @Get()
  coffees() {
    Logger.log('in coffees controller');
    return this.coffeesService.getCoffees();
  }

  @Post()
  createCoffee(@Body() createCoffee: CreateCoffeeDto) {
    return this.coffeesService.postCoffees(createCoffee);
  }
}
