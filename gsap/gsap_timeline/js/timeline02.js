'use strict';

{
  window.addEventListener('DOMContentLoaded', () => {
    // rect要素を生成
    for (let i = 0; i < 84; i++) {
      const rect = document.createElement('div');
      rect.classList.add('rect');
      document.getElementById('container02').appendChild(rect);
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
      stagger: {
        each: 0.08,
        grid: 'auto',
        from: 'center',
      },
    })
    .to('.rect', {
      borderRadius: '50%',
      duration: .5,
    })
    .to('.rect', {
      backgroundColor: 'red',
      duration: .5,
      delay: .4,
    })
    .to('.rect', {
      borderRadius: 0,
      duration: .5,
      delay: .4,
    })
    .to('.rect', {
      backgroundColor: '#fff',
      delay: .4,
      stagger: {
        each: 0.08,
        grid: 'auto',
        from: 'edges',
      },
    })
  });
}