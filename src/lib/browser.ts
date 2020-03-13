import {ThenableWebDriver, Builder} from 'selenium-webdriver';
import {WaitCondition} from './condition';

export class Browser {
  private webdriver: ThenableWebDriver;

  public constructor(browserName: string) {
    this.webdriver = new Builder().forBrowser(browserName).build();
  }

  public async navigate(url: string): Promise<void> {
    await this.webdriver.navigate().to(url);
  }

  public async wait(condition: WaitCondition) {
    await this.waitAny(condition);
  }

  public async waitAny(conditions: WaitCondition | WaitCondition[]): Promise<void> {
    const all = !(conditions instanceof Array) ? [conditions] : conditions;

    await this.webdriver.wait(async () => {
      for (const condition of all) {
        try {
          if ((await condition(this)) === true) {
            return true;
          }
          continue;
        } catch (ex) {
          continue;
        }
      }
    });
  }

  public async close(): Promise<void> {
    await this.webdriver.quit();
  }
}
