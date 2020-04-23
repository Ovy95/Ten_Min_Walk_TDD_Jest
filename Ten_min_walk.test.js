const tenMinWalk = require('./Ten_min_walk')

describe('TenMinWalk', function (){
  it('Should have an array lengh equal to 10',() => {
  const directions = ['n','n','n','n','n','n','n','n','n','n'];
  expect(tenMinWalk(directions.length)).toEqual(10)
  });
});
