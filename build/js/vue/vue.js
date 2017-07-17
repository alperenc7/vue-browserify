window.Vue = require("vue");
const HomeComponent = require("./components/home.vue")
const VenueComponent = require("./components/venue.vue")
const UserComponent = require("./components/user.vue")
const TipComponent = require("./components/tip.vue")

let self;

window.app = new Vue({
  name: "app",
  el: "#application",
  data() {
    return {
      coords: {
        latitude: 0,
        longitude: 0
      }
    }
  },
  components: {
    home: HomeComponent,
    venue: VenueComponent,
    tip: TipComponent,
    user: UserComponent
  },
  created () {
    self = this
    self.getUserLocation()
    setInterval(() => {
      self.getUserLocation()
    }, 1000 * 60 * 45) // 45 Minutes
  },
  methods: {
    getUserLocation(){
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords)
        this.coords.latitude = position.coords.latitude
        this.coords.longitude = position.coords.longitude
      })
    }
  }
})
