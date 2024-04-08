<template>
  <div>
    <h2>Map</h2>

    <div>
      <input ref="searchInput" type="text" placeholder="Search for a place...">
      <button @click="search">Search</button>

      <GoogleMap :apiKey="apiKey" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <Marker :options="{ position: center }" />
  </GoogleMap>

    </div>


  </div>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";
import apiKey from "../apiKey"; // Import your API key from a separate file

export default {
  name: 'MapPage',
  components: { GoogleMap, Marker },
  mounted() {
    this.initAutocomplete();
  },
  setup() {


//     {
//     "locationLat": 127.043,
//     "applyAddr3": "505호",
//     "applyAddr1": "서울",
//     "petSeq": 1,
//     "applyAddr2": "서울 강남구 논현로507 성지하이츠3차빌딩",
//     "dailyLimit": 8000,
//     "kioskName": "쇼룸키오스크",
//     "locationLng": 37.4926,
//     "workTime": "쇼룸운영시간"
// }


    const center = { lat:37.4926, lng: 127.043 };
    const markerOptions = { position: center, label: "L", title: "Da" };
    let searchInput;

const search = () => {
  console.log("search",searchInput)

  const place = searchInput;
  console.log("search",searchInput)
  if (!place) return;

  const geocoder = new window.google.maps.Geocoder();
  geocoder.geocode({ address: "yangon" }, (results, status) => {
    if (status === 'OK' && results && results.length > 0) {
      center.lat = results[0].geometry.location.lat();
      center.lng = results[0].geometry.location.lng();
    } else {
      console.error('Geocode was not successful for the following reason:', status);
    }
  });
};

const initAutocomplete = () => {
  const input = searchInput;
  const autocomplete = new window.google.maps.places.Autocomplete(input); // Use window.google.maps.places.Autocomplete

  // const autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace();
    if (!place.geometry || !place.geometry.location) {
      console.error('Place or geometry not found:', place);
      return;
    }

    center.lat = place.geometry.location.lat();
    center.lng = place.geometry.location.lng();
  });
};      
    return { center ,markerOptions,apiKey,searchInput,search,initAutocomplete };
  },

};
</script>

<style>

@import url('https://unpkg.com/@vue3-google-maps/api/css/main.css');
</style>
