'use strict';

{
  // ボックス要素
  const box = document.getElementById('box');

  // スライドの動きの定数
  const moveRight = {
    left: '100%',
    xPercent: -100,
    ease: 'linear',
    duration: 1.2,
  };
  const moveLeft = {
    left: 0,
    xPercent: 0,
    ease: 'linear',
    duration: 1.2,
  };
  const moveDown = {
    duration: .5,
    ease: 'linear',
  };

  window.addEventListener('DOMContentLoaded', () => {
    gsap.timeline()
    // ローディングのアニメーション
    .to('#loading', {
      autoAlpha: 0,
      duration: .8,
      delay: 2,
    })
    // ボックス要素のアニメーション
    .set(box, {
      opacity: 1,
    }, '+=.3')
    .to(box, {
      ...moveRight,
      rotate: 1440,
    }, '+=1')
    .to(box, {
      y: 100,
      ...moveDown,
    })
    .to(box, {
      opacity: 0,
      duration: .6,
      ease: 'linear',
    })
    .to(box, {
      ...moveLeft,
    }, '<')
    .to(box, {
      opacity: 1,
      duration: .6,
      ease: 'linear',
    }, '-=50%')
    .to(box, {
      y: 200,
      ...moveDown,
    })
    .to(box, {
      scale: 3,
      duration: .6,
      ease: 'linear',
    })
    .to(box, {
      ...moveRight,
    }, '<')
    .to(box, {
      scale: 1,
      duration: .6,
      ease: 'linear',
    }, '-=50%')
    .to(box, {
      y: 300,
      ...moveDown,
    })
    .to(box, {
      scale: .1,
      duration: .6,
      ease: 'linear',
    })
    .to(box, {
      ...moveLeft,
    }, '<')
    .to(box, {
      scale: 1,
      duration: .6,
      ease: 'linear',
    }, '-=50%')
    .to(box, {
      y: 400,
      ...moveDown,
    })
    .to(box, {
      background: 'hsl(+=360, 100%, 40%)',
      duration: 1.2,
      ease: 'circ',
    })
    .to(box, {
      ...moveRight,
    }, '<')
  });
}