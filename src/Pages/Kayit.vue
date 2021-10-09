<template>
  <div class="container">
    <b-container fluid > 
      <img class="logo-login fluid" src="https://www.kolaybi.com/images/base/kolaybi_logo.png" width="250" alt="">
      <hr/>
    <b-row class="form">
      <b-col class="display-flex justify-content-center">
        <b-form @submit="prevent">
           <b-row>
            <b-col cols="6">
                 <b-form-input class="input" placeholder="Adınız">
                 </b-form-input>              </b-col>
            <b-col cols="6">
                  <b-form-input class="input" placeholder="Soyadınız">
                 </b-form-input> 
             </b-col>
          </b-row>

          <b-form-row>
            <b-col cols="12">
                 <b-form-input class="input" placeholder="Telefon">
                 </b-form-input>   
               </b-col>
          </b-form-row>

          <b-form-row>
            <b-col cols="12">
                 <b-form-input class="input" placeholder="E-Posta">
                 </b-form-input>   
               </b-col>
          </b-form-row>

          <b-form-row>
            <b-col cols="12">
                 <b-form-input class="input" type="password" placeholder="Şifre">
                 </b-form-input>   
               </b-col>
          </b-form-row>
          <hr/>

             <b-col cols="12">
                Kayıt olarak <b-link style="font-size:medium;" href="#">Kullanım Sözleşmesi</b-link> & 
                <b-link style="font-size:medium;" href="#">Gizlilik Politikasını</b-link> 
                kabul etmiş sayılırsınız.
             </b-col>
             <hr>
               
               <b-col class="giris">
                 Mevcut bir hesabım var. <router-link to="/giris">Giriş Yap.</router-link>
               </b-col>
             <hr/>
           <b-button class="btn" variant="success">KAYDOL</b-button>
           
        </b-form>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<style scoped>
  
     .container{
       background: #EEEEEE;
       width: 40%;
       height: 650px;
       margin-top: 20px;
       padding-top: 80px;
     }
     .input{
       margin-top: 20px;
       margin-bottom: 10px;   
     }
     .btn{
       width: 100%;
       border-radius: 15px;
       margin-top: 20px;
       font-size: large;
     }
     .logo-login{
       margin-top: 0px;
       margin-left: 150px;
     }
    .giris{
      margin-left: 150px;
    }
</style>

<script>
export default {
  name: "Kayit",
};
</script>
