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

  // Motion_translateX
  document.getElementById('button_1').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      x: 500,
      duration: dur,
      ease: ease,
      overwrite: true,
    })
    .set(box, {
      x: 0,
    });
  });

  // Motion_translateY
  document.getElementById('button_2').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      y: 300,
      duration: dur,
      ease: ease,
      overwrite: true,
    })
    .set(box, {
      y: 0,
    });
  });

  // Motion_rotation
  document.getElementById('button_3').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      rotation: 360,
      duration: dur,
      ease: ease,
      overwrite: true,
    })
    .set(box, {
      rotation: 0,
    });
  });

  // Motion_scale(+)
  document.getElementById('button_4').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      scale: 2,
      duration: dur,
      ease: ease,
      overwrite: true,
    })
    .set(box, {
      scale: 1,
    });
  });

  // Motion_scale(-)
  document.getElementById('button_5').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      scale: 0.5,
      duration: dur,
      ease: ease,
      overwrite: true,
    })
    .set(box, {
      scale: 1,
    });
  });

  // Motion_skewX
  document.getElementById('button_6').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      skewX: '45deg',
      duration: dur,
      ease: ease,
      overwrite: true,
    })
    .set(box, {
      skewX: 0,
    });
  });

  // Motion_skewY
  document.getElementById('button_7').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      skewY: '45deg',
      duration: dur,
      ease: ease,
      overwrite: true,
    })
    .set(box, {
      skewY: 0,
    });
  });

  // Motion_opacity
  document.getElementById('button_8').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      opacity: 0,
      duration: dur,
      ease: ease,
      overwrite: true,
    })
    .set(box, {
      opacity: 1,
    });
  });

  // Motion_b-radius
  document.getElementById('button_9').addEventListener('click', () => {

    resetStyle();

    gsap.timeline()
    .to(box, {
      borderRadius: '15px',
      duration: dur,
      ease: ease,
      overwrite: true,
    })
    .set(box, {
      borderRadius: 0,
    });
  });

  // Ease
  let ease;

  document.querySelectorAll('#ease-change input[type="radio"]').forEach(radio => {
    radio.addEventListener('click', () => {
      ease = radio.value;
    });
  })

  // Color
  document.querySelectorAll('#color-change input[type="radio"]').forEach(radio => {
    radio.addEventListener('click', () => {
      gsap.to(box, {
        background: radio.value,
        duration: .3,
        ease: 'none',
      });
    });
  });

  // Duration 
  let dur = 3;
  const durRange = document.querySelector('#dur-change input[type="range"]');

  durRange.addEventListener('input', () => {
    dur = parseInt(durRange.value, 10);
    console.log(dur);
  });
}

// アニメーション終了時の挙動制御ボタン作るかも