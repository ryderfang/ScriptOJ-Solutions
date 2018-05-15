const extractStr = (str) => {
  let re = /(\:)(\w+)*(?=\.)/g;
  // let result = re.exec(str);
  let arr = str.match(re);
  if (arr === null) {
    return [];
  }
  arr = arr.map((value, index, array) => {
    return value.substr(1);
  });
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  return arr || [];
}

extractStr(':.:.::lYzsKc.OBxwcQQnbrJK');