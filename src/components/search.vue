<template>
    <form>
    <div class="container">
        <div class="form-group">
            <label>Tytuł</label>
            <input type="text" class="form-control" placeholder="Podaj tytuł lub fragment tytułu filmu" v-model="movieTitle" @keyup.enter="submit"/>
        </div>
        <div class="form-group row">
            <label class="col-sm-4 col-form-label">Rok produkcji od:</label>
            <div class="col-sm-8">
                <input type="text" class="form-control" placeholder="Liczba naturalna z przedziału 1900-2019" v-model="movieYearFrom"/>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-4 col-form-label">Rok produkcji do:</label>
            <div class="col-sm-8">
                <input type="text" class="form-control" placeholder="Liczba naturalna z przedziału 1900-2019" v-model="movieYearTo"/>
            </div>
        </div>
        <div class="form-group">
            <label>Obsada</label>
            <input type="text" class="form-control" placeholder="Imię i nazwisko" v-model="movieCast"/>
        </div>
        <div class="form-group row">
            <input type="button" class="btn btn-info col-sm-12" value="Szukaj" v-on:click="submit"/>
        </div>
        </div>
    </form>

</template>


<script>
    export default {
        data: function() {
            return {
                movieTitle: "",
                movieYearFrom: "",
                movieYearTo: "",
                movieCast: "",
                typedMovieTitle: "b"
            }
        },
        methods: {
            submit: function() {
                this.$emit("sendTitle", this.movieTitle);
                this.$emit("sendDataFrom", this.movieYearFrom);
                this.$emit("sendDataTo", this.movieYearTo);
                this.$emit("sendCast", this.movieCast);
                
                /*
                //czyszczenie pól
                this.movieTitle = "";
                this.movieYearFrom = "";
                this.movieYearTo = "";
                this.movieCast = ""*/
            }
        }
    }
</script>