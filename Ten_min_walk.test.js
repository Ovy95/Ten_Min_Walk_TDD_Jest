const tenMinWalk = require('./Ten_min_walk')

describe('TenMinWalk', function (){
  it('Should have an array lengh equal to 10',() => {
  const directions = ['n','n','n','n','n','n','n','n','n','n'];
  expect(tenMinWalk(directions)).toEqual(['n','n','n','n','n','n','n','n','n','n'])
  });

  it ('Returns a message INVAlID WALK if directions array is less or more then 10 characters long',() => {
    const directions = ['n','n','n'];
    expect(tenMinWalk(directions)).toEqual("Invalid walk")
  })

});
