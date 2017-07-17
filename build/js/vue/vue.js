window.Vue = require("vue");
const VueRouter = require("vue-router");
const HomeComponent = require("./components/home.vue")
const VenueDetailsComponent = require("./components/venue-details.vue")

const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: HomeComponent
    },
    {
      path: "/home",
      component: HomeComponent,
      name: "home"
    },
    {
      path: "/venues/:id",
      component: VenueDetailsComponent,
      name: "venue.details"
    }
  ]
})

let self;

window.app = new Vue({
  name: "app",
  router,
  el: "#application",
  data() {
    return {
      coords: {
        latitude: 0,
        longitude: 0
      }
    }
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
        this.coords.latitude = position.coords.latitude
        this.coords.longitude = position.coords.longitude
      })
    }
  }
})
