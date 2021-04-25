import { NestFactory } from '@nestjs/core';
import { LanguageModule } from './language/language.module';

async function bootstrap() {
  const app = await NestFactory.create(LanguageModule);
  await app.listen(9000);
}
bootstrap();
