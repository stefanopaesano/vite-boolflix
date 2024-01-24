<script>
import axios from 'axios';
import { store } from '../store.js';
import AppMovie from "./AppMovie.vue";
import AppSeries from "./AppSeries.vue";

export default {
    data() {
        return {
              store
        };
    },
    methods: {

    },
    components:{
        AppMovie,
        AppSeries

    },
    mounted() {
          axios
             .get(this.store.Urlmovie,{
              params:{
                api_key:this.store.apiKey,
                query:this.store.searchfilm,
              }
             })
             .then((response) => {
                 console.log('movie',response);
             });
          axios
           .get(this.store.Urlserie,{
            params:{
              api_key:this.store.apiKey,
              query:'',
            }
           })
           .then((response) => {
               console.log('serietv',response);
           });
        },
}
</script>

<template>
    <main>

       <div class="container-main">

           <div v-for="(elem, i) in store.Appmovie">
        
              <span>{{ store.AppMovie[0]}}</span>

           </div>

       </div>

    </main>
</template>

<style lang="scss" scoped>
</style>
