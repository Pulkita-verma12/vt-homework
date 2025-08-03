import { HighligthDirective } from './highligth-directive';

describe('HighligthDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: document.createElement('div') } as any;
    const directive = new HighligthDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
