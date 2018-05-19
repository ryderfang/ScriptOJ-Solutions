const addClass = (dom, name) => {
  let arr = dom.getAttribute('class').split(' ');
  arr.push(name)
  dom.setAttribute('class', arr.join(' '));
}

const removeClass = (dom, name) => {
  let arr = dom.getAttribute('class').split(' ');
  let idx = arr.indexOf(name);
  if (idx !== -1) {
    arr.splice(idx, 1);
  }
  dom.setAttribute('class', arr.join(' '));
}

const hasClass = (dom, name) => {
  let arr = dom.getAttribute('class').split(' ');
  return (arr.indexOf(name) !== -1);
}

var dom = document.createElement('div');
dom.setAttribute('class', 'shit');
addClass(dom, 'fuck');
console.log(dom.getAttribute('class'));
