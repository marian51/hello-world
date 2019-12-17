<template>
<!--
  <div id="app">
  
    <h4 class="bg-primary text-white text-center p-2">
    Baza filmow {{name}}
    </h4>
    <Search></Search>
    <div class="container-fluid p-4">
    <div class="row">
    <div class="col font-weight-bold">Filmy</div>
    <div class="col-2 font-weight-bold">Ulubione</div>
  </div>
  <div class="row" v-for="movie in 10" v-bind:key="movie.title">
    <div class="col">{{movies[movie].title}}</div>
    <div class="col-2">{{movie.year}}</div>
  </div>
  </div>
  </div>
  -->
  <page />
</template>

<script>
import Page from "./components/Page.vue"
//import Search from './components/search.vue'
export default {
  name: 'app',
  components: {
    Page
  },
}

</script>
