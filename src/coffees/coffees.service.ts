import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CoffeesService {
  constructor() {}
  public getCoffees() {
    Logger.log('in coffees service');
    return 'this is coffees route.';
  }

  public postCoffees(body) {
    Logger.log(`in create coffees with data: ${body}`);
    return { statusCode: 201, message: 'Coffee created.', data: [body] };
  }
}
