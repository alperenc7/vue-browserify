<template>
  <div id="homepage" class="container">
    <!-- Searhbar -->
    <div class="row">
      <div class="col-sm-10">
        <label for="searchbar">Arama</label> <input type="text" class="form-control" placeholder="Arama yapacağınız metni giriniz..." v-model="search">
      </div>
      <div class="col-sm-2">
        <button @click="searchForVenues" class="btn btn-primary btn-block">Ara</button>
      </div>
    </div>
  </div>
</template>
<script>
  module.exports = {
    computed: {
      coords () {
        return this.$parent.coords
      }
    },
    data: function () {
      return {
        search: null
      }
    },
    methods: {
      searchForVenues () {
        axios.get("venues/search", {
          params: {
            ll: "32.23, 31.00"
          }
        }).then(response => {
          console.log(response)
        })
      }
    }
  }
</script>
<style>
  button{
    margin-top: 30px;
  }
</style>
