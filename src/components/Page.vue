<template>
    <div class="container-fluid">
        <div class="col bg-primary text-white text-center p-2">
            <h4>Baza filmów</h4>
        </div>
       
        <moviesTable />
        <movieByCast />
         <movieByGenre />
        <!--
        <div class="row" v-for="movie in 10" v-bind:key="movie.title">
            <div class="col">{{movies[movie].title}}</div>
            <div class="col-2">{{movie.year}}</div>
        </div>


        filtered: _.filter(json, function(movie){
                return movie.title == "Caught";
}),
        filtered() {
            var qwerty = this.titleee;
            var searchedYearFrom = this.yearFrom;
            var filtereddd = _.filter(json, function(movie){
                return ( (movie.title.includes(qwerty)) || (movie.year==searchedYearFrom)) ;
                })
            
            return filtereddd;
        }


        filtered() {
            const {titleee, yearFrom } = this;
            return this.movies
            .filter(movie => movie.title.toLowerCase().indexOf(titleee.toLowerCase()) > -1 )
            .filter(movie => movie.year == yearFrom)
        },
        
         _(json).chain().flatten().pluck('genres').unique().value()
        
        
        
        -->
    </div>
</template>


<script>
//import Search from "./search.vue";
import moviesTable from "./MoviesTable.vue";
import movieByCast from "./MoviesByCast.vue";
import movieByGenre from "./MoviesByGenre.vue";

export default {
    components: {
        //Search,
        moviesTable,
        movieByCast,
        movieByGenre
    }
}
</script>