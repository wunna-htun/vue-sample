<!-- About.vue -->
<template>
  <div>
    <h2>About</h2>
    <p>This is the about page.</p>

    <div>
      <!-- <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube> -->
      <!-- <button @click="playVideo">play</button> -->
    </div>

    <div>
      <YouTube 
        src="https://www.youtube.com/watch?v=jNQXAC9IVRw" 
        @ready="onReady"
        ref="youtube" />
    </div>

  </div>
</template>

<script>
import YouTube from 'vue3-youtube'

export default {
  name: 'AboutPage',
  components: { YouTube },
    methods: {
        onReady() {
            this.$refs.youtube.playVideo()
        },
    },
};
</script>
