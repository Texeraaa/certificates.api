import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('EASYCERT.API')
    .setDescription('API EASYCERT')
    .setVersion('1.2.6')
    .addTag('Course')
    .addTag('Event')
    .addTag('Event-Paper')
    .addTag('Participant')
    .addTag('Participant-Event')
    .addTag('Type-Participant')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
