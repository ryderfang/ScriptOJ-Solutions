
// 0 <= num < 100,000,000
const toChineseNum = (num) => {
  const chn = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '万'];
  if (num < 10) {
    return chn[num];
  }
  if (num < 100) {
    let ret = chn[Math.floor(num / 10)] + chn[10];
    if (num % 10 != 0) {
      ret += toChineseNum(num % 10);
    }
    return ret;
  }
  if (num < 1000) {
    let ret = chn[Math.floor(num / 100)] + chn[11];
    if (num % 100 != 0) {
      // +0
      if (num % 100 < 10) {
        ret += chn[0];
      }
      ret += toChineseNum(num % 100);
    }
    return ret;
  }
  if (num < 10000) {
    let ret = chn[Math.floor(num / 1000)] + chn[12];
    if (num % 1000 != 0) {
      // +0
      if (num % 1000 < 100) {
        ret += chn[0];
      }
      ret += toChineseNum(num % 1000);
    }
    return ret;
  }
  if (num < 100000000) {
    let ret = toChineseNum(Math.floor(num / 10000)) + chn[13]
    if (num % 10000 != 0) {
      // + 0
      if (num % 10000 < 1000) {
        ret += chn[0];
      }
      ret += toChineseNum(num % 10000)
    }
    return ret;
  }
};

// console.log(toChineseNum(01));
// console.log(toChineseNum(20));
// console.log(toChineseNum(31));
// console.log(toChineseNum(181));
// console.log(toChineseNum(180));
// console.log(toChineseNum(300));
// console.log(toChineseNum(801));
// console.log(toChineseNum(1801));
// console.log(toChineseNum(1081));
// console.log(toChineseNum(1881));

console.log(toChineseNum(8810));

console.log(toChineseNum(18810));
console.log(toChineseNum(110032));
console.log(toChineseNum(334321));
console.log(toChineseNum(12340001));
console.log(toChineseNum(30401203));