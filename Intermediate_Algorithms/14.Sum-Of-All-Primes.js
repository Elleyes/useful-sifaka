function sumPrimes(num) {
var sieve = [];
var primes = [];
    for (i = 2; i <= num; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= num; j += i) {
                sieve[j] = true;
            }
        }
    }
   return primes.reduce(function(a, b) {
    return a + b;
   }, 0);
}

sumPrimes(11);
