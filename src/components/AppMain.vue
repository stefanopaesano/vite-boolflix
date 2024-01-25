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
                <h2>move</h2>
                <li>
                    titolo:{{ elem.title }}
                </li>
                <li>
                    titolo originale:{{ elem.original_title }}
                </li>
                <li>
                    lingua originale:{{ elem.original_language }}
                </li>
                <li>
                     <img :src="getFlag(elem.original_language)" :alt="elem.original_language">
                </li>
                <li>
                    voto: {{ elem.vote_count }}
                </li>
            </ul>

            <ul v-for="(elem, i) in store.AppSeries" :key="i">
                <h3>series</h3>
                <li>
                    titolo:{{ elem.name }}
                </li>
                <li>
                    titolo originale:{{ elem.original_name }}
                </li>
                <li>
                    lingua originale:{{ elem.original_language }}
                </li>
                <li>
                     <img :src="getFlag(elem.original_language)" :alt="elem.original_language">
                </li>
                <li>
                    voto: {{ elem.vote_count }}
                </li>
            </ul>
        </div>
  

    </main>
</template>

<style lang="scss" scoped>
ul{
    border: 1px solid black;

    img{
        width: 30px;
    }
}
</style>
