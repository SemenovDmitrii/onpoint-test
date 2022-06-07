let slider = document.querySelector('.wrapper__list')
document.addEventListener('touchstart', down)
document.addEventListener('touchend', up)

let pointerdown = 0;
let pointerup = 0;
let slide = 0;

function down(e) {
  return pointerdown = e.changedTouches[0].clientX;
}

function up(e) {
  pointerup = e.changedTouches[0].clientX;
  if (pointerup === pointerdown) {
    return
  }

  if (Math.abs(pointerdown - pointerup) < 50) {
    return
  }

  if (pointerdown - pointerup < 0) {
    slide++
    if (slide > 0) {
      slide = 0;
      return
    }
    slider.style.transform = `translateX(${slide * 100}vw)`

  } else {
    slide--

    if (slide < -2) {
      slide = -2;
      return
    }
    slider.style.transform = `translateX(${slide * 100}vw)`

  }

  if (slide === -1) {
    let delay = 3;
    document.querySelectorAll('.about__animation').forEach(i => {
      delay++

      i.style.animationPlayState = 'running';
    })
  }
}

document.querySelector('.wrapper__home').onclick = () => {
  slider.style.transform = `translateX(0vw)`;
  slide = 0
}

document.querySelector('.button').onclick = () => {
  slider.style.transform = `translateX(-100vw)`;
  slide = -1;
}

document.querySelector('.brend__btn').onclick = () => {
  document.querySelector('.brend__name').innerHTML = 'преимущества';
  document.querySelector('.brend__bg').style.opacity = "0.702";
  document.querySelector('.brend__desc').style.opacity = "1";
  document.querySelector('.brend__desc').style.zIndex = "3";

}

document.querySelector('.brend__close').onclick = () => {
  document.querySelector('.brend__name').innerHTML = 'Ключевое сообщение';
  document.querySelector('.brend__bg').style.opacity = "0";
  document.querySelector('.brend__desc').style.opacity = "0";
  document.querySelector('.brend__desc').style.zIndex = "1";
}

const items = document.querySelectorAll('.brend__point');

for (let i = 3; i < 6; i++) {
  items[i].style.position = 'absolute';
  items[i].style.opacity = '0';
}

document.querySelector('.brend__arrow--left').onclick = () => {
  document.querySelector('.brend__arrow--right').classList.remove('active')
  document.querySelector('.brend__arrow--left').classList.add('active')
  let i = 0;
  while (i < 6) {
    if (i < 3) {
      items[i].style.position = 'static'
      items[i].style.opacity = '1'
      items[i].style.transition = 'opacity 0.4s'

    } else {
      items[i].style.position = 'absolute'
      items[i].style.opacity = '0'
      items[i].style.transition = 'none'
    }
    i++
  }
}

document.querySelector('.brend__arrow--right').onclick = () => {
  document.querySelector('.brend__arrow--left').classList.remove('active')
  document.querySelector('.brend__arrow--right').classList.add('active')
  let i = 0;
  while (i < 6) {
    if (i > 2) {
      items[i].style.position = 'static'
      items[i].style.opacity = '1'
      items[i].style.transition = 'opacity 0.4s'

    } else {
      items[i].style.position = 'absolute'
      items[i].style.opacity = '0'
      items[i].style.transition = 'none'
    }
    i++
  }
}
