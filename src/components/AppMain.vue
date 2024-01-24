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
            
            <div v-for="(elem, i) in store.AppMovie" :key="i">
                <span>{{ elem.title }}</span>
            </div>

            <div v-for="(elem, i) in store.AppSeries" :key="i">
                <span>{{ elem.title }}</span>
            </div>

       </div>

    </main>
</template>

<style lang="scss" scoped>
</style>
