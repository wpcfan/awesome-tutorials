import { PragmaticPage } from './app.po';

describe('pragmatic App', () => {
  let page: PragmaticPage;

  beforeEach(() => {
    page = new PragmaticPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
