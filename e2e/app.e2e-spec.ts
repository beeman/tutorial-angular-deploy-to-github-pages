import { TutorialAngularDeployToGithubPagesPage } from './app.po';

describe('tutorial-angular-deploy-to-github-pages App', () => {
  let page: TutorialAngularDeployToGithubPagesPage;

  beforeEach(() => {
    page = new TutorialAngularDeployToGithubPagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
