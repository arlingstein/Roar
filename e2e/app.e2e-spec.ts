import { RoarPage } from './app.po';

describe('roar App', () => {
  let page: RoarPage;

  beforeEach(() => {
    page = new RoarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
