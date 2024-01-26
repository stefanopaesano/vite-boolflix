import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
// <!-- <li>
//                     titolo originale:{{ elem.original_title }}
//                 </li>
//                 <li>
//                     titolo:{{ elem.title }}
//                 </li>
//                 <li>
//                      <img :src="getFlag(elem.original_language)" :alt="elem.original_language">
//                 </li>
//                 <li>
//                     lingua originale:{{ elem.original_language }}
//                 </li>
//                 <li>
//                     <i v-for="n in 5" class="fa-star" 
//                             :class="{ 
//                             'fa-solid': n <= Math.ceil(elem.vote_average / 2), 
//                             'fa-regular': n > Math.ceil(elem.vote_average / 2) 
//                             }" style="color: #ffff00;">
//                     </i>
//                 </li> -->