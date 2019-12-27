<template>
    <div class="container col-6 float-left">
        <h2 class="bg-warning text-white text-center p-3">Filmy według gatunku</h2>
                <ul v-for="s in searched.slice(0,100)" v-bind:key="s.title">
                    <li>{{ s.name }}
                        <ul v-for="x in s.titles" v-bind:key="x.title">
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
        filtered() {
            return json
        },     
        genres() {
                    
            return json
        },
        rejected() {
            let tab = _.reject(json, function(m){
                return m.genres=="";
            })

            return tab;
        },
        genresed() {
            //wycięcie z json filmów bez gatunku
            let tab2 = this.rejected;
            //przeniesienie tablicy gatunków, uproszczenie i wyciągnięcie unikatów
            let unique = _.uniq(_.flatten(_.map(tab2, function(m){
                return m.genres;
            })));

            return unique;
        },
    //spróbujmy zrobić tablicę tablic
        searched: function() {
            let tab = [];
            let tab2 = [];
            for (let g in this.genresed){
                
                for (let r = 0; r<10; r++) {
                    for (let a in this.rejected[r].genres) {
                        if (this.rejected[r].genres[a]==this.genresed[g]) {
                           // let o = this.rejected[r]; //mozna w sumie wpisac tam tylko tytul
                           let o = this.rejected[r].title;
                            tab2.push(o);
                        }
                    }
                }
                tab[g]=tab2;
                tab2=[];
            }

            const filmy = []

            for (let y=0; y<41; y++) {
                const tmp = {
                    name: this.genresed[y],
                    titles: tab[y]
                }
                filmy.push(tmp)
            }
            return filmy;
            
            
        },
    },
    
}
</script>
