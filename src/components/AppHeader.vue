<script>
import axios from 'axios';
import { store } from '../store.js';
import AppMovie from "./AppMovie.vue";
import AppSeries from "./AppSeries.vue";

export default {
    data() {
        return {
            store,
            AppMovie,
            AppSeries
        };
    },
    methods: {
        searchbutton(){
        axios
             .get(this.store.Urlmovie,{
              params:{
                api_key:this.store.apiKey,
                query:this.store.searchfilm,
              }
             })
             .then((response) => {
                 console.log('movie',response);
                 this.store.AppMovie = response.data.results
             });
          axios
           .get(this.store.Urlserie,{
            params:{
              api_key:this.store.apiKey,
              query:this.store.searchfilm,
            }
           })
           .then((response) => {
               console.log('serietv',response);
               this.store.AppSeries = response.data.results;
           });
            

    }

    },
    
}
</script>

<template>


    <header>

        <div class="container">
            <div>

                <h1>boolflix</h1>
                
            </div>

            <div class="cercaTesto">

                
                    <input  v-model="store.searchfilm"  type="text"  style="width: 400px; height: 20px;">
                    <button @click="searchbutton"    style="width: 50px; height: 20px;">
                           search
                    </button>

                
                
            </div>

        </div>



        
    </header>



</template>

<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    height: 100px;
    width: 100%;
    background-color: rgb(49, 47, 47);

    .cercaTesto{
        display: flex;
    }
}

</style>
