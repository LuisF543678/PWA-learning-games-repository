Vue.config.devtools = true;

Vue.component('card', {
  template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: ['dataImage'],
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null
  }),

  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };

    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      };

    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})`
      };

    }
  },

  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    }
  }
});



const app = new Vue({
  el: '#app'
});


var network_status = true;
setInterval(function () {
  if (!network_status && navigator.onLine) {
    network_status = true;
    console.log("¡De nuevo en línea!");
    alert("¡De nuevo en línea!");
  }
  else if (network_status && !navigator.onLine) {
    network_status = false;
    console.log("¡Conexión perdida!");
    alert("¡Conexión perdida!");
  }
}, 100);

/**
 * Notificactions
 */

var button = document.getElementById("notification");
button.addEventListener('click', function (e) {
  Notification.requestPermission().then(function (result) {
    if (result === 'granted') {
      randomNotification();
    }
  });
});

function randomNotification() {
  /* var randomItem = Math.floor(Math.random() * games.length); */
  var notifTitle = "Mantente notificado para nuevos juegos";
  var notifBody = "Actualiza tu aplicación constantemente";
  var notifImg = "./assets/icons/ms-icon-310x310.png";
  var options = {
    body: notifBody,
    icon: notifImg
  }
  var notif = new Notification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}