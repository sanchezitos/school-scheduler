import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configura CORS para permitir solicitudes desde http://127.0.0.1:5173
  app.enableCors({
    origin: 'http://127.0.0.1:5173',
  });
  await app.listen(3001);
}
bootstrap();
