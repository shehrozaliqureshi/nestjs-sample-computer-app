import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

/*
  By default all the services in module are private and cannot be accessed
  by any other modules. In order to make accessible to other modules we add
  them to exports array inside module decorator 
*/
@Module({
  providers: [PowerService],
  exports: [PowerService]
})
export class PowerModule {}
