import { NgTutPage } from './app.po';

describe('ng-tut App', () => {
  let page: NgTutPage;

  beforeEach(() => {
    page = new NgTutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
