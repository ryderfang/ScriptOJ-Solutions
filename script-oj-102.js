function cacheFunc(f) {
  let cache = {};
  return function () {
    let key = JSON.stringify(arguments);
    ret = cache[key]
    return ret || (cache[key] = f(...arguments));
  }
}

/*
F is a functional, i.e. a function that takes a function. Y will take that functional 
and produce a fixed point for it
*/
function Y(F, cache) {
  cache = cache || {};
  return function (arg) {
    var answer;
    if (cache[arg]) {
      return cache[arg]; // Answer in cache.
    }
    answer = (F(function (n) {
      return (Y(F, cache))(n);
    }))(arg);
    cache[arg] = answer; // Cache the answer.
    return answer;
  };
}

function mkFib(g) {
  return function (n) {
    return n < 2 ? n : g(n - 1) + g(n - 2);
  }
}

const fibonacci = Y(mkFib);

// will TLE !
// const fibonacci = (n) => {
//   return Y(mkFib)(n);
// };

// Wrong
// const fibonacci = cacheFunc(mkFib);

for (let i = 0; i < 20; i++) {
  console.log(i + ':::');
  console.time("test" + i);
  console.log(fibonacci(1000));
  console.timeEnd("test" + i);
}
