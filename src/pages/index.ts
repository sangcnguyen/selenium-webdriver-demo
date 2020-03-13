import {LoginPage} from './LoginPage';
import {Browser} from '../lib';

export {LoginPage};

export class AllPages {
  public login: LoginPage;

  constructor(public browser: Browser) {
    this.login = new LoginPage(browser);
  }

  public async dispose(): Promise<void> {
    await this.browser.close();
  }
}
