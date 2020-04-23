const tenMinWalk = require('./Ten_min_walk')

describe('TenMinWalk', function (){
  it('Should have an array lengh equal to 10',() => {
  const directions = ['n','s','n','s','n','s','n','s','n','s'];
  expect(tenMinWalk(directions)).toEqual(['n','s','n','s','n','s','n','s','n','s'])
  });

  it ('Returns a message INVAlID WALK if directions array is less or more then 10 characters long',() => {
    const directions = ['n','e','w'];
    expect(tenMinWalk(directions)).toEqual("Invalid walk")
  });

  it ('Checks amount of Norths are in the array', () => {
    const directions = ['n','n','n','n','n','n','n','n','n','s'];
    expect(tenMinWalk(directions)).toEqual("Ending up walking North for too long")
  });

});
