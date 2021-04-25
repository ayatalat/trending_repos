import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { ILanguage, IRepo } from './interfaces';
import * as moment from 'moment';

@Injectable()
export class LanguageRepository {
  private basicUrl;
  private perPage;

  constructor() {
    this.basicUrl = 'https://api.github.com/search/repositories';
    this.perPage = 100;
  }

  public async listLanguages(): Promise<ILanguage> {
    const repos =  await this.getRepositories();
    const languages = this.getLanguagesList(repos);

    return languages;
  }

  public async getRepositories(): Promise<IRepo[]> {
    const last30Date = moment().subtract(30, 'days').format('YYYY-MM-DD');
    const now = moment().format('YYYY-MM-DD')

    const { data } = await Axios.get(`${this.basicUrl}?q=created:>${last30Date}&created:<${now}&sort=stars&order=desc&per_page=${this.perPage}`)
    return data.items;
  }

  private getLanguagesList(repositories) : ILanguage{
    let languagesList = {};

    repositories.forEach(repo => {
      if(repo.language !== null) {
        if(Object.keys(languagesList).includes(repo.language)) languagesList[repo.language].reposList.push(repo);
        else languagesList[repo.language] = { reposList: [repo] };
        languagesList[repo.language].numOfRepo = languagesList[repo.language].reposList.length
      }
    });

    return languagesList;
  }
}
