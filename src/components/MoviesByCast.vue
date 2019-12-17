<template>
    <div class="container col-6 float-left">
        <h2 class="bg-success text-white text-center p-3">Filmy według obsady</h2>
            <ul v-for="c in cast.slice(0,100)" v-bind:key="c.genre">
                <li>{{ c.title }}
                    <ul v-for="x in c.cast" v-bind:key="x.cast">
                        <li>{{ x }}</li>
                    </ul>
                </li>
            </ul>
    </div>
</template>

<script>
import json from "@/movies.json";
import { _ } from "vue-underscore";

export default {
    data: function() {
        return {
            movies: json
        }
    },

    computed: {
        cast() {
            let rej = _.reject(json, function(m){
                return m.cast=="";
            })
            return rej
        }
    },

    
}
</script>
