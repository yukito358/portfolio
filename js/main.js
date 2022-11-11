'use strict';

{
  // ボックスの取得
  const box = document.querySelector('#box');

  // スタイルリセット用の関数
  const resetStyle = function () {
    gsap.set(box, {
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      opacity: 1,
      borderRadius: 0,
    });
  };

  // translateX
  document.getElementById('button_1').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      x: 500,
      duration: 2,
      ease: ease,
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
      ease: ease,
      overwrite: true,
    })
    .set(box, {
      y: 0,
    });
  });

  // rotation
  document.getElementById('button_3').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      rotation: 360,
      duration: 2,
      ease: ease,
      overwrite: true,
    })
    .set(box, {
      rotation: 0,
    });
  });

  // scale(+)
  document.getElementById('button_4').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      scale: 2,
      duration: 2,
      ease: ease,
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
      ease: ease,
      overwrite: true,
    })
    .set(box, {
      scale: 1,
    });
  });

  // skewX
  document.getElementById('button_6').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      skewX: '45deg',
      duration: 2,
      ease: ease,
      overwrite: true,
    })
    .set(box, {
      skewX: 0,
    });
  });

  // skewY
  document.getElementById('button_7').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      skewY: '45deg',
      duration: 2,
      ease: ease,
      overwrite: true,
    })
    .set(box, {
      skewY: 0,
    });
  });

  // opacity
  document.getElementById('button_8').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      opacity: 0,
      duration: 2,
      ease: ease,
      overwrite: true,
    })
    .set(box, {
      opacity: 1,
    });
  });

  // b-radius
  document.getElementById('button_9').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      borderRadius: '15px',
      duration: 2,
      ease: ease,
      overwrite: true,
    })
    .set(box, {
      borderRadius: 0,
    });
  });

  // easeChange
  let ease;

  document.querySelectorAll('#ease-change input[type="radio"]').forEach(radio => {
    radio.addEventListener('click', () => {
      ease = radio.value;
    });
  })

  // colorChange
  document.querySelectorAll('.color-change').forEach(btn => {
    btn.addEventListener('click', () => {

      const color = btn.dataset.color;

      gsap.to(box, {
        backgroundColor: color,
        duration: 2,
        ease: 'power4.out',
      });
    });
  });
}

// フォームのレンジを使って、スピード調節をできるようにしたい(durationを5段階変更)
// オーバーライトの有無(ラジオボタン形式にするかも)
// colorをeaseと同じく、選択されているものを色付きになるように変更する