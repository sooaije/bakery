import { BookTestPage } from './app.po';

describe('book-test App', function() {
  let page: BookTestPage;

  beforeEach(() => {
    page = new BookTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
