import { RecipeMakerPage } from './app.po';

describe('recipe-maker App', () => {
  let page: RecipeMakerPage;

  beforeEach(() => {
    page = new RecipeMakerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
