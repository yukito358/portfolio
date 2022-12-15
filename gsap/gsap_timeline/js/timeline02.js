'use strict';

{
  window.addEventListener('DOMContentLoaded', () => {
    // rect要素を生成
    for (let i = 0; i < 84; i++) {
      const rect = document.createElement('div');
      rect.classList.add('rect');
      document.getElementById('container').appendChild(rect);
    }

    gsap.timeline()
    // ローディングのアニメーション
    .to('#loading', {
      autoAlpha: 0,
      duration: .8,
      delay: 2,
    })
    // ボックス要素のアニメーション
    .from('.rect', {
      alpha: 0,
      repeat: -1,
      repeatDelay: 1.5,
      stagger: {
        each: 0.02,
        from: 'random',
      }
    });
  });
}