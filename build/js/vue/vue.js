var Vue = require("vue");
var HomeComponent = require("./components/home.vue")

window.app = new Vue({
  name: "app",
  el: "#application",
  components: {
    home: HomeComponent
  }
})
