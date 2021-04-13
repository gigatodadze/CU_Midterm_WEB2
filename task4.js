function repeat(repeatNtimes, n) {
   for(let i=0;i<n;i++)
    repeatNtimes();
 
}


repeat(function(){console.log("Hello Saba")},4);
