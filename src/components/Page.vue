<template>
    <div class="container-fluid">
        <div class="col bg-primary text-white text-center p-2">
            <h4>Baza filmów</h4>
        </div>
       
        <moviesTable />
        <movieByCast />
         <movieByGenre />
        
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