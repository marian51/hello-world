<template>
    <div class="container-fluid">
        <search @sendTitle="updateTitle" @sendDataFrom="updateDataFrom" @sendDataTo="updateDataTo"/>
        <h2 class="bg-primary text-white text-center p-3">Filmy</h2>
        <table class="table table-sm table-bordered table-striped text-left">
            <tr><th>Tytuł</th><th>Rok</th><th>Obsada</th><th>Gatunek</th></tr>
            <tbody>
                <tr v-for="m in filtered.slice(0,value)" v-bind:key="m.title">
                    <td>{{ m.title }}</td>
                    <td>{{ m.year }}</td>
                    <td>{{ m.cast[0] }}</td>
                    <td>{{ m.genres[0] }}</td>
                </tr>
            </tbody>
        </table>
        <div class="text-center">
            <input type="button" class="btn btn-primary" value="Więcej" v-on:click="moreMovies"/>
        </div>
    </div>
</template>

<script>
import json from "@/movies.json";
import { _ } from "vue-underscore";
import search from "./search";
/*
console.log(_.filter(json, function(movie){
    return movie.year == "Caught";
}));
console.log(search.movieTitle);
*/
export default {
    data: function() {
        return {
            movies: json,
            casts: json.cast,
            lol: search.movieTitle,
            titleee: "",
            yearFrom: 1910,
            yearTo: 2000,
            value: 10
        }
        
    },
    computed: {
        filtered() {
            const {titleee, yearFrom, yearTo} = this;
            if (titleee == "" && yearFrom == "" && yearTo == "") {
                return json
            }


            else if (titleee != "" && yearFrom == "" && yearTo == "") {
                return _.filter(json, function(movie){return movie.title.toLowerCase().includes(titleee.toLowerCase())});
                }
            else if (titleee == "" && yearFrom != "" && yearTo == "") {
                return _.filter(json, function(movie){return movie.year >= yearFrom});
            }
            else if (titleee == "" && yearFrom == "" && yearTo != "") {
                return _.filter(json, function(movie){return movie.year <= yearTo});
            }


            else if (titleee != "" && yearFrom != "" && yearTo == "") {
                let temp = _.filter(json, function(movie){return movie.title.includes(titleee)});
                return _.filter(temp, function(movie){return movie.year >= yearFrom});
            }
            else if (titleee == "" && yearFrom != "" && yearTo != "") {
                let temp = _.filter(json, function(movie){return movie.year <= yearTo});
                return _.filter(temp, function(movie){return movie.year >= yearFrom});
            }
            else if (titleee != "" && yearFrom == "" && yearTo != "") {
                let temp = _.filter(json, function(movie){return movie.year <= yearTo});
                return _.filter(temp, function(movie){return movie.title.includes(titleee)});
            }

            else if (titleee != "" && yearFrom != "" && yearTo != "") {
                let temp = _.filter(json, function(movie){return movie.year <= yearTo});
                let temp2 = _.filter(temp, function(movie){return movie.year >= yearFrom});
                return _.filter(temp2, function(movie){return movie.title.includes(titleee)});
            }


            else {
                return json
            }
        },
    },
    
    methods: {
        updateTitle(message) {
            this.titleee = message;
        },
        updateDataFrom(message) {
            this.yearFrom = message;
        },
        updateDataTo(message) {
            this.yearTo = message;
        },
        moreMovies() {
            this.value = this.value+10;
        }
    },

    components: {
        search
    }
}

</script>