function sum_all_multiples(num1,num2,lim) {
  
  var sum = 0;    // sum will be stored here
  
  for (i = 0; i < lim; i++) { 
    if (i % num1 === 0 || i % num2 === 0)
      sum += i;
  }
  
  console.log('Sum of natural numbers below ', lim, ' that are multiples of ', num1, ' or ', 5, ':\n', sum);
  return sum;
  
}

sum = sum_all_multiples(3,5,1000);
  
