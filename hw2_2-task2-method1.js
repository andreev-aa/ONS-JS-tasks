
//Решение 1
function findAllPrimes(n) {
  const primes = [];
  nextPrime:
  for (let i = 2; i <= n; i++) {
      //если найдется делитель, переходим к следующему i без записи в консоль
      //если число простое, сохраним в массив
      for (let j = 2; j < i; j++) {
          if (i % j == 0) continue nextPrime; 
      }
      primes.push(i);
}

console.log(primes.toString());
}

findAllPrimes(100);