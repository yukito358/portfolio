'use strict';

{
  // 横スライドの動きの定数
  const sideMoveRight = {
    left: '100%',
    xPercent: -100,
    ease: 'linear',
    duration: 1.2,
  };
  const sideMoveLeft = {
    left: 0,
    xPercent: 0,
    ease: 'linear',
    duration: 1.2,
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
    .set('#box', {
      opacity: 1,
    }, '+=.3')
    .to('#box', {
      ...sideMoveRight,
      rotate: 1440,
    }, '+=1')
    .to('#box', {
      y: 100,
      ease: 'linear',
      duration: .5,
    })
    .to('#box', {
      ...sideMoveLeft,
    })
    .to('#box', {
      y: 200,
      ease: 'linear',
      duration: .5,
    })
    .to('#box', {
      ...sideMoveRight,
    })
    .to('#box', {
      y: 300,
      ease: 'linear',
      duration: .5,
    })
    .to('#box', {
      ...sideMoveLeft,
    })
    .to('#box', {
      y: 400,
      ease: 'linear',
      duration: .5,
    })
    .to('#box', {
      ...sideMoveRight,
    })
  });
}

// 画面端までの横移動と、ローディングとボックス被らないようにするコードをもう少しよくできないか