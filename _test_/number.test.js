import * as nh from '../src/Utils/numbers';

describe('numbers', () => {
  it('should know how to round a float', () => {
    const num = nh.round(23.355);
    expect(typeof num).toBe('number');
    expect(num).toBe(23.4);
  });

  it('should know how to split a float', () => {
    const num = nh.round(25.654);
    const n = nh.splitNumber(num, '.');
    expect(typeof n).toBe('object');
    expect(n.number).toBe('25');
    expect(n.fraction).toBe('7');
  });

  it('should know how to guess the seperator', () => {
    const num = nh.round(23.0);
    const n = nh.splitNumber(num);
    expect(typeof n).toBe('object');
    expect(n.number).toBe('23');
    expect(n.fraction).toBe('0');
  });
});
