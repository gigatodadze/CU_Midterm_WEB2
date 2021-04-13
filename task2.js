function reverse(myArray) {
    var reversedArray=[];
    var n= myArray.length
    // console.log(myArray.length)
    for(let i=n;i>0;i--){
        reversedArray[n-i]=myArray[i-1];
    }
    return reversedArray;
}

const data2 = [1,2,3,4];
console.log(reverse(data2));
