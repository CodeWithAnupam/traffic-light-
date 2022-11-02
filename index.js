const c = document.querySelector('.circle')
c.style.display = 'flex';


let counter = 1;
let t = 45;

let red = () => {
  c.style.backgroundColor = '#ef2917';
  c.textContent = 'Danger !'
}

let green = () => {
  c.style.backgroundColor = '#20c20e';
  c.textContent = 'Go !'
}

red();

setInterval(() => {

  if (t === 60) {
    t = 45;
    if (counter === 1) {
      green();
      counter = 2;
    } else {
      red();
      counter = 1;
    }
  }

  if (t >= 50) {
    if (c.style.display === 'flex') {
      c.style.display = 'none';
    } else {
      c.style.display = 'flex'
    }
  }
  t = t+0.5;
  console.log(`t : ${t}, c: ${counter}`);
}, 500);

