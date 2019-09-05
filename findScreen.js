function findScreenHeight(width, ratio) {
    // Happy coding :)
    let str = "";
    let ratioSplit = ratio.split(":");
    let height = (parseInt(ratioSplit[1])/parseInt(ratioSplit[0]))*width;
    return str.concat(width, 'x', height);
}
console.log(findScreenHeight(1024, "4:3"));
console.log(findScreenHeight(1280,"16:9"));
console.log(findScreenHeight(3840,"32:9"));
    