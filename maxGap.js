function maxGap (numbers){
    //your code here
    numbers.sort((a,b) => a-b);
    let biggestDiff = 0;
    for(var i = 0; i < numbers.length-1; i++){
        let diff = numbers[i+1] - numbers[i];
        if(diff > biggestDiff){
          biggestDiff = diff;
        }
    }
    return biggestDiff;
  }

console.log(maxGap([13,10,2,9,5]));
console.log(maxGap([13,3,5]));
console.log(maxGap([24,299,131,14,26,25]));
console.log(maxGap([-3,-27,-4,-2]));
console.log(maxGap([-7,-42,-809,-14,-12]));
console.log(maxGap([12,-5,-7,0,290]));
console.log(maxGap([-54,37,0,64,-15,640,0]));
console.log(maxGap([130,30,50]));
console.log(maxGap([1,1,1]));
console.log(maxGap([-1,-1,-1]));