import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  // Validates all the incoming reqs coming into our app
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3002);
}
bootstrap();
