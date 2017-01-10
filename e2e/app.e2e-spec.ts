import { KumaranResumePage } from './app.po';

describe('kumaran-resume App', function() {
  let page: KumaranResumePage;

  beforeEach(() => {
    page = new KumaranResumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
