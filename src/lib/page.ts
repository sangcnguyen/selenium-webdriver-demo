import {Browser} from './';
import config from '../config';
import { WaitCondition } from './condition';

export interface NewablePage<T extends Page> {
  new (browser: Browser): T;
}

export abstract class Page {
  private url: string;

  public constructor(protected browser: Browser) {}

  protected setUrl(basePath: string) {
    this.url = config.baseUrl + basePath;
  }

  public async navigate(): Promise<void> {
    await this.browser.navigate(this.url);
    await this.browser.wait(this.loadCondition());
  }

  public abstract loadCondition(): WaitCondition;

  // public async loadCondition():Wait
}
