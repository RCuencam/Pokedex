import { CountByLetterPipe } from './count-by-letter.pipe';

describe('CountByLetterPipe', () => {
  it('create an instance', () => {
    const pipe = new CountByLetterPipe();
    expect(pipe).toBeTruthy();
  });
});
