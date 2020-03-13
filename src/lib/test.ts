import {AllPages} from '../pages';
import {Browser} from './browser';

export abstract class AbstractTestBase {
  pages: AllPages;

  public before() {
    this.pages = new AllPages(new Browser('chrome'));
  }

  public async after() {
    await this.pages.dispose();
  }
}
