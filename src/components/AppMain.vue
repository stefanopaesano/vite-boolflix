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

                <div class="back-info">

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

                </div>
               
            </ul>
            
            <ul v-for="(elem, i) in store.AppSeries" :key="i">
                
                <li>
                   <img  style="width: 100%;" :src="'https://image.tmdb.org/t/p/w500' + elem.poster_path" :alt="elem.poster_path">
                </li>

                <div class="back-info">
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

                </div>
                
            </ul>
        </div>
  

    </main>
</template>

<style lang="scss" scoped>
.container-main{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgb(49, 47, 47);
    width: 100%;
    

}
ul{
    border:3px solid rgb(28, 28, 246);
    list-style: none;
    width: 300px;
    margin: 10px;
    cursor: pointer; /* Aggiunto questo per cambiare il cursore durante l'hover */

  &:hover .back-info {
    display: block;
  }

  .back-info {
    display: none;
    
    top: 100%; /* Posiziona sotto la scheda */
    left: 0;
    width: 100%;
    background-color:  rgb(28, 28, 246);
    padding: 10px;
  }

    img{
        width: 10%;
    }
}
</style>


