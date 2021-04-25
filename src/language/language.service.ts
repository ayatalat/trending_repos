import { Injectable } from '@nestjs/common';
import { LanguageRepository } from './language.repository'

@Injectable()
export class LanguageService {

  constructor(private languageRepository:LanguageRepository) {}

  public async listLanguages() {
    return await this.languageRepository.listLanguages()
  }
}
