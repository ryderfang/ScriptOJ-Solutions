// 在 x, y 方向上重心的距离都小于长或宽和的一半
const isOverlap = (r1, r2) => {
  // (r1.x + r1.width / 2, r1.y - r1.height / 2) ~ (r2.x + r2.width / 2, r2.y - r2.height / 2)
  console.log(r1.x + r1.width / 2 - r2.x - r2.width / 2);
  console.log(r1.width / 2 + r2.width / 2);
  console.log(r1.y + r1.height / 2 - r2.y - r2.height / 2);
  console.log(r1.height / 2 + r2.height / 2);
  if (Math.abs(r1.x + r1.width / 2 - r2.x - r2.width / 2) <= (r1.width / 2 + r2.width / 2) &&
    Math.abs(r1.y + r1.height / 2 - r2.y - r2.height / 2) <= (r1.height / 2 + r2.height / 2)) {
    return true;
  }
  return false;
}


const rect1 = {"x":204.99167867456936,"y":59.16585677891866,"width":534.6338527769411,"height":244.7997855020636};
const rect2 = {"x":499.10365053274,"y":369.8322258111973,"width":8.343729006910872,"height":374.0798384129625};
console.log(isOverlap(rect1, rect2)); // => true
