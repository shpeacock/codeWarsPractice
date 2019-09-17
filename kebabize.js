kebabize = (string) => {
    let str = string.replace(/[0-9]/g, '');
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

console.log(kebabize('myCamelCasedString'));
console.log(kebabize('myCamelHas3Humps'));
