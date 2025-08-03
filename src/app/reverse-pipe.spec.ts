import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('should create an instance', () => {
    const directive = new ReversePipe();
    expect(directive).toBeTruthy();
  });
});
