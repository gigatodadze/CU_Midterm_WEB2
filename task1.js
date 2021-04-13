function fill(n,value) {
    var myArray=[];
    for(let i=0;i<n;i++){
        myArray[i]=value;
    }
    return myArray;
}

const data = 3;
const valueToFill='a';
console.log(fill(data,valueToFill));