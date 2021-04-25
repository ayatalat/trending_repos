import { Controller, Get } from '@nestjs/common';
import { LanguageService } from './language.service';

@Controller()
export class LanguageController {
  constructor(private readonly langService: LanguageService) {}

  @Get('/languages')
  listLanguages() {
    return this.langService.listLanguages();
  }
}
