
//Решение 2- решето Эратосфена
function findAllPrimes(n) {
    const sieve = [];
    const primes = [];

    for (i = 2; i <= n; i++) {

        if (!sieve[i]) {
            primes.push(i);

            for (let j = i * 2; j <= n; j += i) {
                sieve[j] = true;
            }
        }
    }


    console.log(primes.toString());
}

findAllPrimes(30);