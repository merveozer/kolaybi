import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'mdb-vue-ui-kit/css/mdb.min.css';


import Home from './Pages/Home.vue'
import Giris from './Pages/Giris.vue'
import Kayit from './Pages/Kayit.vue'
import GuncelDurum from './Pages/GuncelDurum.vue'
import SatisYonetimi from './Pages/SatisYonetimi.vue'
import SatinAlma from './Pages/SatinAlma.vue'
import GenelGider from './Pages/GenelGider.vue'
import UrunHizmetler from './Pages/UrunHizmetler.vue'
import CariHesaplar from './Pages/CariHesaplar.vue'
import Finans from './Pages/Finans.vue'
import Raporlar from './Pages/Raporlar.vue'
import EkOzellikler from './Pages/EkOzellikler.vue'
import Abonelik from './Pages/Abonelik.vue'
import Ayarlar from './Pages/Ayarlar.vue'
import Destek from './Pages/Destek.vue'
import NavSide from './Pages/NavSide.vue'



Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter);


const router = new VueRouter({
   routes: [   
     {path: '/nav-side', component: NavSide},
     {path: '/panel/guncel-durum', component: GuncelDurum},
     {path: '/panel/satis-yonetimi', component: SatisYonetimi},
     {path: '/panel/satin-alma', component: SatinAlma},
     {path: '/panel/genel-gider', component: GenelGider},
     {path: '/panel/urun-hizmetler', component: UrunHizmetler},
     {path: '/panel/cari-hesaplar', component: CariHesaplar},
     {path: '/panel/finans', component: Finans},
     {path: '/panel/raporlar', component: Raporlar},
     {path: '/panel/ek-ozellikler', component: EkOzellikler},
     {path: '/panel/abonelik', component: Abonelik},
     {path: '/panel/ayarlar', component: Ayarlar},
     {path: '/panel/destek', component: Destek},
     {path: '/giris',  component:Giris },
     {path: '/kayit', component: Kayit},
     {path: '/', component: Home}
   ],
   mode:'history'
})


Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})

