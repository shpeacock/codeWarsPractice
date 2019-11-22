const bonusTime = (salary, bonus) => {
    return (bonus? '£' + salary*10: '£'+ salary); 
}

console.log(bonusTime(2, true), '£20');
console.log(bonusTime(78, false));
console.log(bonusTime(67890, true));
