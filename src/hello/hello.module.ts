import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

@Module({
  controllers: [HelloController], 
  // is the array of controller , that will be exported to the app.module.ts
  // and all controller from this module will be imported in hello.module.ts
  providers: [HelloService],
  // is the array of service , that will be imported to the hello.module.ts
  // and all service from this module will be imported in hello.module.ts
  imports: [], // import other modules if needed, from other module
  exports : [] // export service if needed in other module
})
export class HelloModule {}
