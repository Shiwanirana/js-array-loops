// 1. Within the factorials function, write a loop that begins at 1 and multiplies every consecutive
// number up to and including the given number(num). Return the total after the loop completes.
// Example:
// input: 4
// output: 24
// 1*2*3*4 = 24

function factorials(num) {
    var fact= 1;
    if(num==0 || num==1){
      return fact;
    }else{
     for(var i=1; i<=num; i++)
     {
        fact=fact*i;
     }
    }
    return (fact);
}

// ------------------------------------------

// 2. Write a function that sums up all of the numbers in a range
// Example:
// input: 2, 6
// output: 20

function rangeTotal(n1, n2) {
    var sum=0;
    for(var i=n1; i<=n2; i++)
    {
        sum+= i;
    }
    return sum;
}

// ------------------------------------------


// 3. Write a function that will take in a starting number, ending number, and a divisor. Iterate
// over the range of the numbers and rtuen how many numbers can be divided by the divisor.
// Example:
// input: 15, 20, 5
// output: 2

function rangeDivisor(start, end, divisor) {
     var count=0;
     for(i=start;i<=end;i++)
     {
       if(i%divisor==0)
       {
         count++;
       }
     }
    return count;
}
