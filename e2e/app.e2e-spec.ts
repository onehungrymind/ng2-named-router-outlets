import { Ng2NamedRoutesPage } from './app.po';

describe('ng2-named-routes App', function() {
  let page: Ng2NamedRoutesPage;

  beforeEach(() => {
    page = new Ng2NamedRoutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
