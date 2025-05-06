import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {


    getHello(): string {
        return 'Hello nestjs';
    }

    getHelloWithName(name: string): string {
        return `Hello ${name} from nestjs`;
    }
}
