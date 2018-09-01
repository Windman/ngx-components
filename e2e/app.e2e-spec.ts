import { MkDropdownPage } from './app.po';

describe('mk-dropdown App', () => {
  let page: MkDropdownPage;

  beforeEach(() => {
    page = new MkDropdownPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
