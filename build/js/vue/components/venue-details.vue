<template>
  <div id="venue-details">
    <div v-if="venue">
      <h2>{{ venue.name }}</h2>
      <ul class="venue-images">
        <li v-for="photo in photos">
          <img :src="getProperImage(photo,100,100)">
        </li>
      </ul>
    </div>
    <div v-else>
      <div class="text-center">
        <h3>Mekan bilgileri yükleniyor...</h3>
      </div>
    </div>
  </div>
</template>
<script>
  module.exports = {
    name: "VenueDetails",
    computed: {
      photos () {
        return this.venue ? this.venue.photos.groups[0].items : [];
      }
    },
    data () {
      return {
        venue: null
      }
    },
    methods: {
      getProperImage(photo, w, h){
        w = typeof w == "undefined" ? 80 : w;
        h = typeof h == "undefined" ? 80 : h;
        return photo.prefix + w + "x" + h + photo.suffix
      }
    },
    mounted () {
      axios.get("venues/" + this.$route.params.id).then(response => {
        this.venue = response.data.response.venue
      })
    }
  }
</script>
<style>
  .venue-images{
    margin-left:  0;
    padding-left: 0;
    display:      table;
  }
  
  .venue-images li{
    list-style-type: none;
    display:         inline-table;
    padding:         5px;
    margin-right:    5px;
    border:          1px solid #EEEEEE;
  }
  
  .deneme{
    border: 1px solid red;
  }
</style>
