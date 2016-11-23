import { Ng2TutPage } from './app.po';

describe('ng2-tut App', function() {
  let page: Ng2TutPage;

  beforeEach(() => {
    page = new Ng2TutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
