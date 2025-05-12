import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// yarn start:dev = yarn watch + yarn start at the time
async function bootstrap() {
  const port = 8080;

  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Lecture5 example')
    .setDescription('The lecture5 API description')
    .setVersion('1.0')
    .addTag('univeristy')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
}
bootstrap();
