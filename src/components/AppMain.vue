<script>
import axios from 'axios';
import { store } from '../store.js';
import AppMovie from "./AppMovie.vue";
import AppSeries from "./AppSeries.vue";


export default {
    data() {
        return {
              store,
              
        };
    },
    methods: {

    },
    components:{
        AppMovie,
        AppSeries

    },
    mounted() {
        
    },
    methods: {
        getFlag(lang) {
            let finalLink = '';

            if (lang == 'en') {
            finalLink = 'https://flagicons.lipis.dev/flags/4x3/gb.svg';
            }
             else if (lang == 'ja') {
            finalLink = 'https://flagicons.lipis.dev/flags/4x3/jp.svg';
            }
             else {
            finalLink = 'https://flagicons.lipis.dev/flags/4x3/' + lang + '.svg';
            }

            return finalLink;
        }
    },
}
 
</script>

<template>
    <main>
        
        <div class="container-main">
            
            <ul v-for="(elem, i) in store.AppMovie" :key="i">
                
                <li>
                    <img style="width: 100%;"  :src="'https://image.tmdb.org/t/p/w500' + elem.poster_path" :alt="elem.poster_path">
                </li>
                <li>
                    titolo originale:{{ elem.original_title }}
                </li>
                <li>
                    titolo:{{ elem.title }}
                </li>
                <li>
                     <img :src="getFlag(elem.original_language)" :alt="elem.original_language">
                </li>
                <li>
                    lingua originale:{{ elem.original_language }}
                </li>
                <li>
                    <i v-for="n in 5" class="fa-star" 
                            :class="{ 
                            'fa-solid': n <= Math.ceil(elem.vote_average / 2), 
                            'fa-regular': n > Math.ceil(elem.vote_average / 2) 
                            }" style="color: #ffff00;">
                    </i>
                </li>
            </ul>
            
            <ul v-for="(elem, i) in store.AppSeries" :key="i">
                
                <li>
                   <img  style="width: 100%;" :src="'https://image.tmdb.org/t/p/w500' + elem.poster_path" :alt="elem.poster_path">
                </li>
                <li>
                    titolo originale:{{ elem.original_name }}
                </li>
                <li>
                     titolo:{{ elem.name }}
                </li>
                <li>
                     <img :src="getFlag(elem.original_language)" :alt="elem.original_language">
                </li>
                <li>
                    lingua originale:{{ elem.original_language }}
                </li>
                <li>
                    <i v-for="n in 5" class="fa-star" 
                        :class="{ 
                        'fa-solid': n <= Math.ceil(elem.vote_average / 2), 
                        'fa-regular': n > Math.ceil(elem.vote_average / 2) 
                         }" style="color: #ffff00;">
                    </i>
                   
                </li>
            </ul>
        </div>
  

    </main>
</template>

<style lang="scss" scoped>
.container-main{
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(49, 47, 47);

}
ul{
    border: 1px solid black;
    list-style: none;
    width: 33%;

    img{
        width: 10%;
    }
}
</style>
