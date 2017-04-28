import { HelloAngularPage } from './app.po';

describe('hello-angular App', () => {
  let page: HelloAngularPage;

  beforeEach(() => {
    page = new HelloAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
