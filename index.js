function distanceFromHqInBlocks(blocks){
    if (blocks > 42) {
    return blocks - 42;
} else {
    return 42 - blocks }
}

function distanceFromHqInFeet(blocks) {
   return distanceFromHqInBlocks(blocks) * 264;
}
distanceFromHqInFeet(1);

function distanceTravelledInFeet(start, destination) {
    let blocksInFeet;
    blocksInFeet = (destination - start) * 264;
    return Math.abs(blocksInFeet);
}
distanceTravelledInFeet();

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
    return 0;
       }   else 
        if (distanceTravelledInFeet(start, destination) > 400 &&
             distanceTravelledInFeet(start, destination) < 2000) {
            return (distanceTravelledInFeet(start, destination) - 400) *.02
        }   else 
        if (distanceTravelledInFeet(start, destination) > 2000 &&
        distanceTravelledInFeet(start, destination) < 2500) {
            return 25;
        }   else
        if (distanceTravelledInFeet(start, destination) > 2500) {
                return `cannot travel that far`
            }
        }
    

calculatesFarePrice();