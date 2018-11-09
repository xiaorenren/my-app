import { MytvModule } from './mytv.module';

describe('MytvModule', () => {
  let mytvModule: MytvModule;

  beforeEach(() => {
    mytvModule = new MytvModule();
  });

  it('should create an instance', () => {
    expect(mytvModule).toBeTruthy();
  });
});
