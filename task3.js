
// high order function ის გარეშე .
// const data3 = [0,1,false,2,undefined,'',3,null];

//   function compact(myArray) {
//     //   debugger
//      var n = myArray.length;
//     for (let i=n-1;i>=0;i--) {
//       if ( myArray[i]  === null ||  myArray[i] === undefined || myArray[i] === false || myArray[i] === 0 || myArray[i] === '') {
//         var index = myArray.indexOf(myArray[i]);
//         myArray.splice(i,1)
//         // delete myArray[i]
//       }
//     }
//     return myArray
//   }
  
//   console.log(data3);
//   console.log(compact(data3));


// high order function ით, იმიტორო compact  აბრუნებს  RemoveNotWanted -ს .

const data3 = [0,1,false,2,undefined,'',3,null];

function compact(myArray) {
     var n = myArray.length;
    return RemoveNotWanted(myArray,n)
}
function RemoveNotWanted(myArray,n){
    for (let i=n-1;i>=0;i--) {
        if ( myArray[i]  === null ||  myArray[i] === undefined || myArray[i] === false || myArray[i] === 0 || myArray[i] === '') {
          var index = myArray.indexOf(myArray[i]);
          myArray.splice(i,1)
        }
      }
      return myArray
    }   


console.log(data3);
console.log(compact(data3));
