import { Controller, Get, Param, Query } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
    constructor(private readonly helloService: HelloService){}

    @Get()
    getHello(): string {
        return this.helloService.getHello();
    }

   @Get("/name/:username")
   getUser(@Param("username") username:string) : string {
    return this.helloService.getHelloWithName(username)
   }

   @Get('query')
   getHelloUser(@Query("name") name:string ) :string {
    return this.helloService.getHelloWithName(name)
   }
}
