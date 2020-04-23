const tenMinWalk = directions => {
  
  if(directions.length !== 10) {
    return "Invalid walk"
  }
  if (directions.filter(x => x === 'n').length !== directions.filter(x => x === 's').length )
  return "Ending up walking North for too long"
   else {
    return directions
  }

};
module.exports = tenMinWalk;
