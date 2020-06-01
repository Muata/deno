const player = videojs('video', {
  autoplay: 'muted',
  preload: 'auto',
});
player.httpSourceSelector();

new Twitch.Embed('twitch-embed', {
  channel: 'lempiank',
  allowfullscreen: false,
  layout: 'video',
  theme: 'dark',
  height: 270,
  width: 480,
  autoplay: true,
});

const dragLempiank = {
  container: document.querySelector('#twitch-video'),
  dragBar: document.querySelector('#twitch-video-drag'),
  active: false,
  initialX: 0,
  initialY: 100,
  currentX: 0,
  currentY: 100,

  init: function () {
    this.dragBar.addEventListener('touchstart', this.dragStart, false);
    this.dragBar.addEventListener('touchend', this.dragEnd, false);
    this.dragBar.addEventListener('touchmove', this.drag, false);

    this.dragBar.addEventListener('mousedown', this.dragStart, false);
    this.dragBar.addEventListener('mouseup', this.dragEnd, false);
    this.dragBar.addEventListener('mousemove', this.drag, false);
  },

  dragStart: function (e) {
    if (e.type === 'touchstart') {
      this.initialX = e.touches[0].clientX;
      this.initialY = e.touches[0].clientY;
    } else {
      this.initialX = e.clientX;
      this.initialY = e.clientY;
    }

    if (e.target === document.querySelector('#twitch-video-drag')) {
      this.active = true;
    }
  },

  drag: function (e) {
    if (this.active) {
      e.preventDefault();

      if (e.type === 'touchmove') {
        this.currentX = e.touches[0].clientX;
        this.currentY = e.touches[0].clientY;
      } else {
        this.currentX = e.clientX;
        this.currentY = e.clientY;
      }

      document.querySelector('#twitch-video').style.left = `${
        this.currentX - e.target.offsetWidth / 2
      }px`;
      document.querySelector('#twitch-video').style.top = `${
        this.currentY - e.target.offsetHeight / 2
      }px`;
    }
  },

  dragEnd: function (e) {
    this.initialX = this.currentX;
    this.initialY = this.currentY;

    this.active = false;
  },
};

dragLempiank.init();
