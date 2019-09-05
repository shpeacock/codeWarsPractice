function findScreenHeight(width, ratio) {
    // Happy coding :)
    let str = "";
    let ratioSplit = ratio.split(":");
    let height = (parseInt(ratioSplit[1])/parseInt(ratioSplit[0]))*width;
    return str.concat(width, 'x', height);

    //smarter ways
    // var arr=ratio.split(':');
    // return width+'x'+width/arr[0]*arr[1];

    //clever clever
    var [numerator, denominator] = ratio.split(':')  
    return width + 'x' + width * denominator / numerator
}
console.log(findScreenHeight(1024, "4:3"));
console.log(findScreenHeight(1280,"16:9"));
console.log(findScreenHeight(3840,"32:9"));
    