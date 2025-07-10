import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { setupSwagger } from './utils/swagger.util';
import { ValidationError } from 'class-validator';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  app.enableCors({
    origin: config.getOrThrow<string>('ALLOWED_ORIGIN'),
    credentials: true,
    exposedHeaders: ['set-cookie'],
  });

  setupSwagger(app);

  app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const formattedErrors = {};
        for (const error of errors) {
          if (error.constraints) {
            formattedErrors[error.property] = Object.values(error.constraints);
          }
        }
        console.log(formattedErrors);
        
        return new BadRequestException({ message: 'Validation failed', errors: formattedErrors });
      },
    }));
  await app.listen(config.getOrThrow<number>('APPLICATION_PORT'));
  // await redis.ping()
}
bootstrap();
