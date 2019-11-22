const sortThis = (array) => {
    let firstWord = array.sort()[0];
    let returnedThing = '';
    for (i=0; i < firstWord.length; i++){
        if(i <firstWord.length-1){
            returnedThing += firstWord[i] + '***';
        }
        else {
            returnedThing += firstWord[i];
        }
    }
    console.log(returnedThing);
}
sortThis(["Banana", "Orange", "Apple", "Mango"]);