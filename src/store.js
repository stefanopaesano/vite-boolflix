
import { reactive } from 'vue';

export const store = reactive ({
    searchTxte:'',
    apiKey:'c1eaece10417b9d2c656d995663fb743',
    Urlmovie:'https://api.themoviedb.org/3/search/movie',
    Urlserie:'https://api.themoviedb.org/3/search/tv', 
    AppMovie:[],
    AppSeries:[],
    searchfilm: '',
});