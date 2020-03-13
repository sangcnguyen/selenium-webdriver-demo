import {suite, test} from 'mocha-typescript';
import {AbstractTestBase} from '../lib';

@suite
class LoginTest extends AbstractTestBase {
  @test()
  public async loginTest(): Promise<void> {
    await this.pages.login.logInAs('tomsmith', 'SuperSecretPassword!');
  }
}
