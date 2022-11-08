'use strict';

{
  // ボックスの取得
  const box = document.querySelector('#box');

  // スタイルリセット用の関数
  const resetStyle = function () {
    gsap.set(box, {
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    });
  };

  // translateX
  document.getElementById('button_1').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      x: 500,
      duration: 2,
      ease: 'power4.out',
      overwrite: true,
    })
    .set(box, {
      x: 0,
    });
  });

  // translateY
  document.getElementById('button_2').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      y: 300,
      duration: 2,
      ease: 'power4.out',
      overwrite: true,
    })
    .set(box, {
      y: 0,
    });
  });

  // rotate
  document.getElementById('button_3').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      rotate: 360,
      duration: 2,
      ease: 'power4.out',
      overwrite: true,
    })
    .set(box, {
      rotate: 0,
    });
  });

  // scale(+)
  document.getElementById('button_4').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      scale: 2,
      duration: 2,
      ease: 'power4.out',
      overwrite: true,
    })
    .set(box, {
      scale: 1,
    });
  });

  // scale(-)
  document.getElementById('button_5').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      scale: 0.5,
      duration: 2,
      ease: 'power4.out',
      overwrite: true,
    })
    .set(box, {
      scale: 1,
    });
  });
}

// リセット関数あり・オーバーライト設定なしで、アニメーションの実行中に他のボタンを押して別のアニメーションを実行した際、リセット関数によってまず初期状態がリセットされると思われるが、何故かそうならない。