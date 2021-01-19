import {AllPages} from 'src/pages';
import {Browser} from '../lib';

describe('Login', () => {
  let pages: AllPages;

  before(() => {
    pages = new AllPages(new Browser('chrome'));
  });

  after(async () => {
    await pages.dispose();
  });

  it('should sign in succssfully', async () => {
    await pages.login.logInAs('tomsmith', 'SuperSecretPassword!');
  });
});
