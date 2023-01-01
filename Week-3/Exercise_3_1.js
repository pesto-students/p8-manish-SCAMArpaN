//Creating a hash map for cache
function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = args.toString();
    //console.log(cache);
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}

//add function as given in exercise
function add(a, b) {
  return a + b;
}

//creating instance of function
const memoizeAdd = memoize(add);

//will be cached and called by add function
console.log(memoizeAdd(100, 100));
console.log(memoizeAdd(100));
console.log(memoizeAdd(100, 200));

//this one will come from cache
console.log(memoizeAdd(100, 100));
