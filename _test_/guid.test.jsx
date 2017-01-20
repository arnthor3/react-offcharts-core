import guid from '../src/Utils/guid';

describe('guid', () => {
  it('collission 1000', () => {
    const ids = [];
    for (let i = 0; i < 100; i += 1) {
      ids.push(guid());
    }

    const obj = {};

    for (let iter = 0; iter < 100; iter += 1) {
      let key = ids[iter];
      if (obj[key]) {
        obj[key] += 1;
      } else {
        obj[key] = 0;
      }
    }
    const collission = Object.keys(obj).filter((k) => obj[k] > 0);
    expect(collission.length > 1).toBe(false);
  });
});
