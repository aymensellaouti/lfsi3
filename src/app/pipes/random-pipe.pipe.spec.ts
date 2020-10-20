import { RandomPipePipe } from './random-pipe.pipe';

describe('RandomPipePipe', () => {
  it('create an instance', () => {
    const pipe = new RandomPipePipe();
    expect(pipe).toBeTruthy();
  });
});
