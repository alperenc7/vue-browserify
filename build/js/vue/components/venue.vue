<template>
  <div class="venue-item" @click="goToVenueDetails(venue.id)">
    <img src="dist/images/cityscape.svg">
    <div class="name">
      {{ venue.name }}
    </div>
    <button class="btn btn-success btn-xs">Mekan Hakkında Detaylar</button>
    <div class="clearfix"></div>
  </div>
</template>
<script>
  module.exports = {
    props: {
      venue: {
        type: Object,
        required: true
      }
    },
    methods: {
      goToVenueDetails(venue_id){
        this.$router.push({
          name: "venue.details",
          params: {
            id: venue_id
          }
        })
      }
    }
  }
</script>
<style>
  .venue-item{
    padding:       5px 15px;
    border-bottom: 1px solid #EEEEEE;
    position:      relative;
    cursor:        pointer;
  }
  
  .venue-item:hover button{
    display: block;
  }
  
  .venue-item button{
    position: absolute;
    right:    15px;
    top:      7px;
    margin:   0;
    display:  none;
  }
  
  .venue-item > img{
    float: left;
    width: 25px;
  }
  
  .venue-item .name{
    float:       left;
    display:     inline-block;
    margin-left: 10px;
  }
</style>
