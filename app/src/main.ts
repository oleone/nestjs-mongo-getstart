import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API demo')
    .setDescription('API to exercise')
    .setVersion('1.0')
    .addTag('mongodb')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  console.log('port => ', process.env.PORT);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
