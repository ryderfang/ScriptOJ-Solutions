const safeGet = (data, path) => {
  let arr = path.split('.');
  if (arr == undefined || arr.length == 0) {
    return undefined;
  }
  let tempData = data;
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i];
    if (tempData.hasOwnProperty(x)) {
      tempData = tempData[arr[i]];
    } else {
      tempData = undefined;
      break;
    }
  }
  return tempData;
}

var data = { a: { b: { c: 'ScriptOJ' } } };
console.log(safeGet(data, 'a.b.c')); // => scriptoj
console.log(safeGet(data, 'a.b.c.d')); // => 返回 undefined
console.log(safeGet(data, 'a.b.c.d.e.f.g')); // => 返回 undefined
