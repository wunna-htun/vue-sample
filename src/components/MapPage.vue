<template>
  <div>
    <h2>Map</h2>

    <div>

      <GoogleMap api-key="AIzaSyCMgjG6AKT_xQXEnYv4ysAMLPFkwzz9o5Q" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <Marker :options="{ position: center }" />
  </GoogleMap>

    </div>


    <!-- <GMap :center="center" :zoom="zoom" @onLoad="onMapLoad" style="width: 100%; height: 400px;"></GMap> -->
  </div>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  name: 'MapPage',
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };

    return { center };
  },
  // setup() {
  //   const center = ref({ lat: 37.7749, lng: -122.4194 }); // San Francisco coordinates
  //   const zoom = ref(10);

  //   const onMapLoad = () => {
  //     console.log('Map loaded');
  //   };

  //   return { center, zoom, onMapLoad };
  // },
};
</script>

<style>

@import url('https://unpkg.com/@vue3-google-maps/api/css/main.css');
</style>
