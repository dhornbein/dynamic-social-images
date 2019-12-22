"use strict"

Vue.component('template0', {
  props: ['title','text','image'],
  data: function () {
    return {
      count: 0
    }
  },
  template: document.getElementById('template0'),
});

var app = new Vue({
  el: "#main",
  data: {
    people: [
      {
        "text": "Anti-matter Specialist",
        "title": "Patrick Parker",
        "image": "assets/img/headshot-0.jpg"
      },
      {
        "text": "Space Carpenter",
        "title": "Lilly Ludwig",
        "image": "assets/img/headshot-1.jpg"
      },
      {
        "text": "Green Ice Investor",
        "title": "Aaron Artword",
        "image": "assets/img/headshot-2.jpg"
      },
      {
        "text": "Gardener",
        "title": "Wendy Wormwood",
        "image": "assets/img/headshot-3.jpg"
      }
    ],
    // https://www.unnecessaryinventions.com/
    products: [
      {
        "text": "That last chip is always the absolute worst!",
        "title": "Chip-Xractor™️",
        "image": "assets/img/product-0.jpg"
      },
      {
        "text": "Text your besties like it’s 1969!",
        "title": "RotarySMS™️",
        "image": "assets/img/product-1.jpg"
      },
      {
        "text": "Handy little sock storage device",
        "title": "Sock Locker™️",
        "image": "assets/img/product-2.jpg"
      },
      {
        "text": "Precious pizza, anywhere - anytime!",
        "title": "The Pizza FannyPack™️",
        "image": "assets/img/product-3.jpg"
      }
    ],
    template: null,
    image: null,
    rendering: false,
    rendered: false
  },

  created: function () {
    this.template = this.people[0];
    this.example = this.products[0];
  },

  // Vue methods
  methods: {
    savePNG: function (id, options) {
      var node = document.getElementById(id);

      var self = this;

      this.rendering = true;

      options = {
        height: node.offsetHeight,
        width: node.offsetWidth
      }

      domtoimage.toPng(node, options)
        .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          document.getElementById(id + '_images').innerHTML = ''; // clears inner html
          document.getElementById(id + '_images').prepend(img);

          self.rendered = true;
          self.rendering = false;
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });
    },
  },
});
