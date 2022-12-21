'use strict';

{
  gsap.registerPlugin(ScrollTrigger);

  // スクロールトリガーアニメーション
  const sections = gsap.utils.toArray('.section');
  
  sections.forEach(section => {
    const sectionChild = gsap.utils.selector(section);

    gsap.set(sectionChild('h2'), {
      y: 20,
      autoAlpha: 0,
    });
    gsap.set(sectionChild('.txt'), {
      y: 20,
      autoAlpha: 0,
    });
  
    gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 40%',
        // markers: true,
      },
      stagger: 0.1,
    }
    )
    .to(sectionChild('h2'), {
      y: 0,
      autoAlpha: 1.5,
      duration: .5,
    })
    .to(sectionChild('.txt'), {
      y: 0,
      autoAlpha: 1.5,
      duration: .5,
    });
  });


  // スクロールダウンのアニメーション
  gsap.timeline( {repeat: -1 } )
    .set('#scrollLine', {
      y: '-100%',
    })
    .to('#scrollLine', {
      y: '100%',
      duration: 1.5,
    });
}
