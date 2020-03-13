import {Page, Browser, findBy, TextInput, Button, elementIsVisible} from '../lib';

export class LoginPage extends Page {
  public loadCondition() {
    return elementIsVisible(() => this.usernameInput);
  }
  constructor(browser: Browser) {
    super(browser);
    this.setUrl('/login');
  }

  @findBy('#username')
  public usernameInput: TextInput;

  @findBy('#password')
  public passwordInput: TextInput;

  @findBy("[type='submit'][class='radius']")
  public loginButton: Button;

  public async logInAs(username: string, password: string): Promise<void> {
    await this.usernameInput.type(username);
    await this.passwordInput.type(password);
    await this.loginButton.click();
  }
}
