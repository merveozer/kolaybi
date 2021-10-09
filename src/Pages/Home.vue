<template>
  <div >
    <div>
      <b-nav class="navbar-home">
        <b-img
          class="logo-home"
          src="https://www.kolaybi.com/images/base/kolaybi_logo.png"
          width="130"
          height="26.69"
        />
        <a href="#" class="home-nav" active>Firmanız için Kolay'Bi</a>
        <a href="#" class="home-nav">Çözüm ve Özellikler</a>
        <a href="#" class="home-nav">Kampanyalar</a>
        <a href="#" class="home-nav">Fiyatlar</a>
        <p class="mali">Mali Müşavirler İçin</p>
        

      <router-link to="/kayit" >
          <b-button class="btn-free" variant="primary"
            >ÜCRETSİZ KULLAN</b-button>
      </router-link>


        <router-link to="/giris" > 
          <b-button class="btn-free" variant="light">GİRİŞ Yap</b-button>
        </router-link>
      </b-nav>

    </div>
       <div class="img">
           <img src="https://www.kolaybi.com/images/vectorel/Her-Sektore-Uygun-On-Muhasebe-Programi.png" alt="">
       </div>
       <div class="text">
            <h2>
               Ön muhasebe programı ile işinizi büyütmenin KolayBi' yolu var! 
            </h2>
            <p class="content">
                Startup, KOBİ veya şahıs şirketinizin ön muhasebe süreçleri, hiç olmadığı kadar kolay. 
                Finansal operasyonlarınızı hızlandıracak birçok özellik web tabanlı ön muhasebe programı KolayBi’de! 
                Siz sadece işinizi kolaylaştırın, zamanınız işletmenizi büyütmeye kalsın.
            </p>
       </div>
  </div>
</template>

<style scoped>
.navbar-home{
  float: left;
  margin-top: 15px;
}
.logo-home {
  margin-left: 125px;
  margin-right: 55px;
  margin-top: 8px;
}
.btn-free {
  margin-left: 25px;
  border-radius: 50px;
}

.home-nav{
  margin-left: 25px;
  margin-top: 8px;
}
.mali {
  margin-left: 25px;
  margin-top: 8px;
  color: orange;
}
.mali:hover {
  color: rgb(40, 40, 190);
}

.giris {
  color: gray;
  margin-left: 60px;
  text-decoration-line: none;
}
.img{
    float: left;
}
.text{
  float: left;
  margin-top: 100px;
  margin-left: 50px;
}
.content{
  width: 800px;
}
</style>


<script>
export default {
  name: 'Home'
 
}
</script>