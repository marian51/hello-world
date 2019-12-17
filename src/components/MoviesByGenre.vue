<template>
    <div class="container col-6 float-left">
        <h2 class="bg-warning text-white text-center p-3">Filmy według gatunku</h2>
                <ul v-for="g in genresed.slice(0,100)" v-bind:key="g.title">
                    <li>{{ g }}
                        
                    </li>        
                </ul>
    </div>
</template>

<script>
import json from "@/movies.json";
import { _ } from "vue-underscore";
/*
//console.log(json[5].genres[1]);  
let i=0;
let tab4 = _.reject(json, function(m){
    return m.genres=="";
})
let tab5 = _.uniq(_.flatten(_.map(tab4, function(m){
    return m.genres;
})))
//let tab6 = _.flatten(tab5);
//let tab7 = _.uniq(tab5);
for (i in tab5){
    console.log(tab5[i])
}

<ul v-for="m in rejected" v-bind:key="m.title">
                            
                        </ul>

*/

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
            let tab3 = _.flatten(tab2);
            for(let i=0; i<10; i++){
                //console.log(tab2[i])
                console.log(tab3[i])
            }
            //przeniesienie tablicy gatunków, uproszczenie i wyciągnięcie unikatów
            let unique = _.uniq(_.flatten(_.map(tab2, function(m){
                return m.genres;
            })));

            return unique;
        }
    },
    
}
</script>
