import * as dim from '../src/Helpers/arcDimension';

describe('dimension', () => {
  it('should give back cx, cy and r', () => {
    const { cx, cy, radius } = dim.dimensions({ width: 400, height: 500 });
    expect(cx).toBeDefined();
    expect(cy).toBeDefined();
    expect(radius).toBeDefined();
  });
  it('should know how to return a scale', () => {
    const s = dim.scale(0, 100);
    expect(typeof s).toBe('function');
  });
  it('should know how to convert to rad from deg', () => {
    expect(dim.degToRad(180)).toBe(Math.PI);
  });
});
