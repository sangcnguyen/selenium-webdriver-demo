import {WebElementPromise} from 'selenium-webdriver';

export class WebComponent {
  constructor(protected element: WebElementPromise, public selector: string) {}

  public async click(): Promise<void> {
    return await this.element.click();
  }

  public async isDisplayed() {
    try {
      return await this.element.isDisplayed();
    } catch (ex) {
      return false;
    }
  }

  public async getText() {
    return await this.element.getText();
  }
}

export class Button extends WebComponent {
  constructor(element: WebElementPromise, selector: string) {
    super(element, selector);
  }
}

export class TextInput extends WebComponent {
  constructor(element: WebElementPromise, selector: string) {
    super(element, selector);
  }

  public async type(text: string): Promise<void> {
    return await this.element.sendKeys(text);
  }
}
