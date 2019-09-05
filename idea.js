function well(x){
    let goodCount = 0;
    for(var i = 0; i <= x.length-1; i++){
        if(x[i]=='good'){
            goodCount++;
        }
    }
    if(goodCount == 0){
        return 'Fail!';
    }
    else if(goodCount > 2) {
        return 'I smell a series!'
    }
    else if(goodCount <= 2){
        return 'Publish!'
    }

    //beter ways
    // const well = x => {
    //     const good_count = x.filter(x => x == 'good').length;
    //     return good_count < 1 ? 'Fail!' : 
    //            good_count < 3 ? 'Publish!' : 'I smell a series!';
    //   }
}

    console.log(well(['bad', 'bad', 'bad']));
    console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
    console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));