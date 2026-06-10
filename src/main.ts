import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable global validation for DTOs
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  
  // Enable CORS for mobile app access
  app.enableCors();
  
  await app.listen(3000);
  console.log(`HOOOD Monolith running on: http://localhost:3000`);
}
bootstrap();
