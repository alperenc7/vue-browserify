<template>
  <div id="homepage" class="container">
    <!-- Searhbar -->
    <div class="row">
      <div class="col-sm-10">
        <label for="searchbar">Arama</label> <input type="text" class="form-control" placeholder="Arama yapacağınız metni giriniz..." @keyup.enter="searchForVenues" v-model="search">
      </div>
      <div class="col-sm-2">
        <button @click="searchForVenues" class="btn btn-primary btn-block">Ara</button>
      </div>
    </div>
    
    <div id="venues-search">
      <div v-for="venue in venues">
        <venue :venue="venue"></venue>
      </div>
    </div>
  </div>
</template>
<script>
  module.exports = {
    components: {
      venue: require("./venue.vue")
    },
    computed: {
      coords () {
        return this.$parent.coords.latitude + ", " + this.$parent.coords.longitude
      }
    },
    data: function () {
      return {
        search: null,
        venues: []
      }
    },
    methods: {
      searchForVenues () {
        axios.get("venues/search", {
          params: {
            ll: this.coords,
            query: this.search
          }
        }).then(response => {
          this.venues = response.data.response.venues
        })
      }
    }
  }
</script>
<style>
  button{
    margin-top: 25px;
  }
  
  #venues-search{
    margin-top: 30px;
  }
</style>
