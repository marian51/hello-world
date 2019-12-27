<template>
    <div class="container-fluid">
        <search @sendTitle="updateTitle" @sendDataFrom="updateDataFrom" @sendDataTo="updateDataTo" @sendCast="updateCast"/>
        <h2 class="bg-primary text-white text-center p-3">Filmy</h2>
        <table class="table table-sm table-bordered table-striped text-left">
            <tr><th>Tytuł</th><th>Rok</th><th>Obsada</th><th>Gatunek</th></tr>
            <tbody>
                <tr v-for="m in filtered.slice(0,value)" v-bind:key="m.titled">
                    <td>{{ m.title }}</td>
                    <td>{{ m.year }}</td>
                    <td>
                        <ul v-for="x in m.cast" v-bind:key="x.cast">
                            <li>{{ x }}</li>
                        </ul> 
                    </td>
                    <td>
                        <ul v-for="x in m.genres" v-bind:key="x.cast">
                            <li>{{ x }}</li>
                        </ul> </td>
                </tr>
            </tbody>
        </table>
        <div class="text-center">
            <input type="button" class="btn btn-primary" value="Więcej" v-on:click="moreMovies"/>
            <input type="button" class="btn btn-secondary" value="Mniej" v-on:click="lessMovies"/>
        </div>
    </div>
</template>

<script>
import json from "@/movies.json";
import { _ } from "vue-underscore";
import search from "./search";

export default {
    data: function() {
        return {
            movies: json,
            casts: json.cast,
            lol: search.movieTitle,
            titleee: "",
            yearFrom: 1900,
            yearTo: 2000,
            value: 10,
            castlel: ""
        }
        
    },
    computed: {
        filtered() {
            const {titleee, yearFrom, yearTo, castlel} = this;
            //wszystkie pole puste
            if (titleee == "" && yearFrom == "" && yearTo == "" && castlel == "") {
                return json
            }

            //pojedyncze
            else if (titleee != "" && yearFrom == "" && yearTo == "" && castlel == "") {
                return _.filter(json, function(movie){return movie.title.toLowerCase().includes(titleee.toLowerCase())});
                }
            else if (titleee == "" && yearFrom != "" && yearTo == "" && castlel == "") {
                return _.filter(json, function(movie){return movie.year >= yearFrom});
            }
            else if (titleee == "" && yearFrom == "" && yearTo != "" && castlel == "") {
                return _.filter(json, function(movie){return movie.year <= yearTo});
            }
            else if (titleee == "" && yearFrom == "" && yearTo == "" && castlel != "") {
                
                /*let rej = _.reject(json, function(m){
                    return m.cast=="";
                })

                return _.filter(rej, function(movie){ 
                    for (let x in movie.cast){
                        if (movie.cast[x].toLowerCase().includes(castlel.toLowerCase())){
                            return true
                        }
            
                    }
                    return false
                    })*/

                    return this.rtnByCast;
            }

            //po dwa
            else if (titleee != "" && yearFrom != "" && yearTo == "" && castlel == "") {
                let temp = _.filter(json, function(movie){return movie.title.includes(titleee)});
                return _.filter(temp, function(movie){return movie.year >= yearFrom});
            }
            else if (titleee == "" && yearFrom != "" && yearTo != "" && castlel == "") {
                let temp = _.filter(json, function(movie){return movie.year <= yearTo});
                return _.filter(temp, function(movie){return movie.year >= yearFrom});
            }
            else if (titleee == "" && yearFrom == "" && yearTo != "" && castlel != "") {
                let temp = this.rtnByCast;
                return _.filter(temp, function(movie){return movie.year <= yearTo});
            }
            else if (titleee != "" && yearFrom == "" && yearTo != "" && castlel == "") {
                let temp = _.filter(json, function(movie){return movie.year <= yearTo});
                return _.filter(temp, function(movie){return movie.title.includes(titleee)});
            }
            else if (titleee != "" && yearFrom == "" && yearTo == "" && castlel != "") {
                let temp = this.rtnByCast;
                return _.filter(temp, function(movie){return movie.title.includes(titleee)});
            }
            else if (titleee == "" && yearFrom != "" && yearTo == "" && castlel != "") {
                let temp = this.rtnByCast;
                return _.filter(temp, function(movie){return movie.year >= yearFrom});
            }

            //po trzy
            else if (titleee != "" && yearFrom != "" && yearTo != "" && castlel == "") {
                let temp = _.filter(json, function(movie){return movie.year <= yearTo});
                let temp2 = _.filter(temp, function(movie){return movie.year >= yearFrom});
                return _.filter(temp2, function(movie){return movie.title.includes(titleee)});
            }
            else if (titleee == "" && yearFrom != "" && yearTo != "" && castlel != "") {
                let temp = this.rtnByCast;
                let temp2 = _.filter(temp, function(movie){return movie.year >= yearFrom});
                return _.filter(temp2, function(movie){return movie.year <= yearTo});
            }
            else if (titleee != "" && yearFrom == "" && yearTo != "" && castlel != "") {
                let temp = this.rtnByCast;
                let temp2 = _.filter(temp, function(movie){return movie.title.includes(titleee)});
                return _.filter(temp2, function(movie){return movie.year <= yearTo});
            }
            else if (titleee != "" && yearFrom != "" && yearTo == "" && castlel != "") {
                let temp = this.rtnByCast;
                let temp2 = _.filter(temp, function(movie){return movie.title.includes(titleee)});
                return _.filter(temp2, function(movie){return movie.year >= yearFrom});
            }

            //wszystkie wypełnione
            else if (titleee != "" && yearFrom != "" && yearTo != "" && castlel != "") {
                let temp = this.rtnByCast;
                let temp2 = _.filter(temp, function(movie){return movie.title.includes(titleee)});
                let temp3 = _.filter(temp2, function(movie){return movie.year >= yearFrom});
                return _.filter(temp3, function(movie){return movie.year <= yearTo});
            }

            else {
                alert("Błąd filtra");
                return json
            }
        },

        rtnByCast() {
            console.log(this.castlel);
            let castletet = this.castlel;
            let rej = _.reject(json, function(m){
                    return m.cast=="";
                })
                return _.filter(rej, function(movie){ 
                    for (let x in movie.cast){
                        if (movie.cast[x].toLowerCase().includes(castletet.toLowerCase())){
                            return true
                        }
            
                    }
                    return false
                    })
        }
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
        updateCast(message) {
            this.castlel = message
        },
        moreMovies() {
            this.value = this.value+10;
        },
        lessMovies() {
            if (this.value>10)
                this.value = this.value-10;
        }
    },

    components: {
        search
    }
}

</script>