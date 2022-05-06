<template>
    <div id="app">
		
	<!--
	  <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#6c2c0a"
        :linesWidth="5"
        :lineLinked="true"
        :lineOpacity="0.5"
        :linesDistance="190"
        :moveSpeed="5"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
	  
      </vue-particles>
	  -->
	  <router-view></router-view>
    </div>	
 </template>
 
 
<script>
import login from './components/Login.vue'
export default {
  name: 'app',
  components: {
  	login,
  },
  
}

</script>

<style>
	/* #particles-js{
		background-image: url('img/bgimg.jpg');
		background-size:cover;
		background-attachment:fixed;
	} */ 
</style>
