function newScene(trigger) {

  var duration = $(trigger)[0].scrollHeight;
  return new ScrollMagic.Scene({
    triggerElement: trigger,
    // triggerHook: 'onEnter',
    duration: duration / 2,
    reverse: true
  });
};

function appear(el) {
  return TweenMax.to(el, 1, {
    opacity: 1
  })
};

function fade(el) {
  return TweenMax.to(el, 1, {
    opacity: 0
  })
};

function pinTitles(el, sceneArray) {
  for (var i = 0; i < el.length; i++) {
    sceneArray.push(new ScrollMagic.Scene({
        triggerElement: el[i],
        triggerHook: 'onEnter'
      })
      .setPin(el[i]));
  }
};

function removeTitlePin(el, sceneArray) {
  for (var i = 0; i < el.length; i++) {
    sceneArray.push(new ScrollMagic.Scene({
        triggerElement: el[i],
        triggerHook: 'onEnter'

      })
      .removePin(el[i]));
  }
};

function showProgress(scenes) {
  scenes.map(function(scene) {
    scene.on('start', function(el) {
      var direction = el.target.controller().info('scrollDirection');
      if (direction === 'FORWARD') {
        $('.books').css('bottom', "+=22px");
      } else {
        $('.books').css('bottom', "-=22px");
      }
    });
  })
}

module.exports = {
  newScene: newScene,
  appear: appear,
  fade: fade,
  pinTitles: pinTitles,
  removeTitlePin: removeTitlePin,
  showProgress: showProgress
};