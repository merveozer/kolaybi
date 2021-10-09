<template>
  <div class="app">
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </head>
    <b-navbar class="navbar">
      <b-button class="btn-default" v-b-toggle.sidebar-no-header
        ><b-icon font-scale="2" icon="list"></b-icon
      ></b-button>

      <router-link to="/nav-side">
        <b-img
          class="logo"
          src="https://www.kolaybi.com/images/base/kolaybi_logotype_light.png"
          width="130"
          height="26.69"
        />
      </router-link>

      <b-nav-item-dropdown class="users" text="Kullanıcılar" right>
        <b-dropdown-item class="drop-item" href="#"
          >JAVA Yazılım A.Ş.</b-dropdown-item
        >
        <b-dropdown-item class="drop-item" href="#">Merve ÖZER</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-navbar-nav>
        <b-nav-item-dropdown
          class="drop-hizli-islemler"
          text="Hızlı İşlemler"
          right
        >
          <b-dropdown-item class="drop-item" href="#">Fatura</b-dropdown-item>
          <b-dropdown-item class="drop-item" href="#">İletişim</b-dropdown-item>
        </b-nav-item-dropdown>
       <b-button-group style="margin-left: 30px; margin-right: 10px;">
      <b-button variant="outline-light">
        <b-icon icon="tools"></b-icon> 
      </b-button>
      <b-button variant="outline-light">
        <b-icon icon="person-fill"></b-icon> 
      </b-button>
      <b-button variant="outline-light">
        <b-icon icon="inbox-fill"></b-icon> 
      </b-button>
    </b-button-group>
      </b-navbar-nav>
    </b-navbar>

    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-header
      shadow
    >
      <template #default="{ hide }">
        <div class="p-3">
          <nav class="mb-3">
            <b-nav vertical>
              <router-link class="side-item" to="/panel/guncel-durum"
                >Güncel Durum
                <b-icon
                  class="side-bar-icon"
                  font-scale="1.3"
                  icon="columns-gap"
                ></b-icon
              ></router-link>
              <router-link class="side-item" to="/panel/satis-yonetimi"
                >Satış Yönetimi<b-icon
                  class="side-bar-icon"
                  font-scale="1.3"
                  icon="calculator-fill"
                ></b-icon
              ></router-link>
              <router-link class="side-item" to="/panel/satin-alma"
                >Satın Alma Yönetimi
                <b-icon
                  class="side-bar-icon"
                  font-scale="1.3"
                  icon="file-earmark-text"
                ></b-icon>
              </router-link>
              <router-link class="side-item" to="/panel/genel-gider"
                >Genel Gider Yönetimi
                <b-icon
                  class="side-bar-icon"
                  font-scale="1.3"
                  icon="files"
                ></b-icon>
              </router-link>
              <router-link class="side-item" to="/panel/urun-hizmetler"
                >Ürün ve Hizmetler<b-icon
                  class="side-bar-icon"
                  font-scale="1.3"
                  icon="server"
                ></b-icon>
              </router-link>
              <router-link class="side-item" to="/panel/cari-hesaplar"
                >Cari Hesaplar
                <b-icon
                  class="side-bar-icon"
                  font-scale="1.3"
                  icon="journal-bookmark"
                ></b-icon>
              </router-link>
              <router-link class="side-item" to="/panel/finans"
                >Finans
                <b-icon
                  class="side-bar-icon"
                  font-scale="1.3"
                  icon="cash"
                ></b-icon>
              </router-link>
              <router-link class="side-item" to="/panel/raporlar"
                >Raporlar
                <b-icon
                  class="side-bar-icon"
                  font-scale="1.3"
                  icon="bar-chart-line-fill"
                ></b-icon>
              </router-link>
              <hr />
              <router-link class="side-item" to="/panel/ek-ozellikler"
                >Ek Özellikler
                <b-icon
                  class="side-bar-icon"
                  font-scale="1.3"
                  icon="menu-button-wide-fill"
                ></b-icon
              ></router-link>
              <router-link class="side-item" to="/panel/abonelik"
                >Abonelik
                <b-icon
                  class="side-bar-icon"
                  font-scale="1.3"
                  icon="credit-card"
                ></b-icon>
              </router-link>
              <router-link class="side-item" to="/panel/destek"
                >Destek
                <b-icon
                  class="side-bar-icon"
                  font-scale="1.3"
                  icon="life-preserver"
                ></b-icon
              ></router-link>
              <router-link class="side-item" to="/panel/ayarlar"
                >Ayarlar
                <b-icon
                  class="side-bar-icon"
                  font-scale="1.3"
                  icon="gear-wide-connected"
                ></b-icon
              ></router-link> <hr/>
                <b-nav-item id="menü-hide" variant="primary" block @click="hide"
            >Menüyü Sakla
            <b-icon class="side-bar-icon" icon="chevron-double-left"></b-icon
          ></b-nav-item>
            </b-nav>
          </nav>
        
        </div>
      </template>
    </b-sidebar>

    <router-view></router-view>
  </div>
</template>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap');

.navbar {
  height: 60px;
  background: #0F52BA;
}

.main-content {
  margin-right: 17%;
  margin-top: 70px;
}

/* users kullanıcıların yanında çıkan nokta işaretini kaldırmak için */
.users {
  list-style: none;
  margin-right: 920px;
}
.navbar .nav-item {
  color: #0F52BA !important;
  font-family: 'Atkinson Hyperlegible', sans-serif;
  font-size: large;

}

.side-item {
  color: #595260;
  text-decoration-line: none;
  font-family: 'Atkinson Hyperlegible', sans-serif;
  font-size: 17px;
  margin-bottom: 15px;
}

.side-item:hover{
 background: #F4F4F4;
 border-radius: 5px;
 color: #0F52BA;
 font-weight:600;
}

.header-right .users {
  color: white;
  background-color: white;
}

.navbar .nav-item {
  margin-right: auto;
}

.logo {
  margin-left: 45px;
  margin-right: 55px;
}

#sidebar-no-header {
  margin-top: 60px;
}

.b-sidebar > .b-sidebar-body{
  background-color: #EEEEEE;
}

.nav-link {
  color: white !important;
}

#menü-hide {
  list-style: none;
  margin-top: 0px;
  font-weight:900;
  background: #77ACF1;
  border-radius: 20px;
}

.side-bar-icon {
  float: right;
}

#sidebar-no-header {
  width: 16%;
}

.btn-default {
  background-color: #0F52BA !important;
  border: initial !important;
  margin-left: 20px;
}

.navbar .nav-bar-icon {
  margin-right: 12px;
  margin-left: 7px;
  color: lightgray;
}

.drop-hizli-islemler {
  border-style: solid;
  border-width: thin;
  border-radius: 4px;
  width: 130px;
  height: 40px;
  text-align: center;
  margin-top: 5px;
  text-decoration: none;
}

.middle {
  margin-left: 20%;
  background-color: rgb(209, 195, 195);
}

.hide {
  margin-top: 2px;
}

</style>

<script>
export default {
  name: "NavSide",
};
</script>
