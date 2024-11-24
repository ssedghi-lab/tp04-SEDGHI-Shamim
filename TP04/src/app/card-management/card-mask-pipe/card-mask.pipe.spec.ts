import { MaskCardCodePipe } from './card-mask.pipe';

describe('maskCardCode', () => {
  it('create an instance', () => {
    const pipe = new MaskCardCodePipe();
    expect(pipe).toBeTruthy();
  });
});
