'use strict';

{
  window.addEventListener('DOMContentLoaded', () => {

    gsap.timeline()
    // ローディングのアニメーション
    .to('#loading', {
      autoAlpha: 0,
      duration: .8,
      delay: 2,
    })
    // ボックス要素のアニメーション
    .to('#box', {
      left: '100%',
      xPercent: -100,
      ease: 'linear',
      duration: 1.2,
    })
    .to('#box', {
      y: 100,
      ease: 'linear',
      duration: .5,
    })
    .to('#box', {
      left: 0,
      xPercent: 0,
      ease: 'linear',
      duration: 1.2,
    })
    .to('#box', {
      y: 200,
      ease: 'linear',
      duration: .5,
    })
    .to('#box', {
      left: '100%',
      xPercent: -100,
      ease: 'linear',
      duration: 1.2,
    })
    .to('#box', {
      y: 300,
      ease: 'linear',
      duration: .5,
    })
    .to('#box', {
      left: 0,
      xPercent: 0,
      ease: 'linear',
      duration: 1.2,
    })
    .to('#box', {
      y: 400,
      ease: 'linear',
      duration: .5,
    })
    .to('#box', {
      left: '100%',
      xPercent: -100,
      ease: 'linear',
      duration: 1.2,
    })
  });
}

// 画面端までの横移動もう少し良い方法はないか
// easeとdurationで同じ記述を何度も書いているので、シンプルにまとめたい
// 白ボックスが、ローディングのフェードアウトと被って表示されるのを直したい