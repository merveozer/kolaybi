<template>
<body>
  <div class="container">
    <b-container fluid > 
      <img class="logo-login fluid" src="https://www.kolaybi.com/images/base/kolaybi_logo.png" width="250" alt="">
    <b-row class="form">
      <b-col class="display-flex justify-content-center">
        <b-form @submit="prevent">
          <b-form-row>
            <b-col cols="12">             
                 <b-form-input class="input" placeholder="E-posta">
                 </b-form-input>   
               </b-col>
          </b-form-row>

          <b-form-row>
            <b-col cols="12">
                 <b-form-input class="input" placeholder="Şifre">
                 </b-form-input>   
               </b-col>
          </b-form-row>
          
          <b-row>
            <b-col cols="7">
                 <b-form-checkbox>Beni Hatırla!</b-form-checkbox>
            </b-col>
            <b-col cols="5">
                 <b-link href="#">Şifremi Unuttum!</b-link>
             </b-col>
          </b-row>
        
          <b-button class="btn" variant="success">GİRİŞ</b-button>

             <b-col cols="12">
                 <b-link style="font-size:small;" href="#">Hesabım yok. Hemen hesap oluşturalım!</b-link>
             </b-col>
           <hr/>
           <b-row class="logos ms-auto"> 
           <b-col cols="5">
           <img src="https://ofis.kolaybi.com/assets/images/logo-ofis-male.png" width="125" alt="">
           </b-col>
           <b-col cols="5">
           <img src="https://ofis.kolaybi.com/assets/images/logo-bank-male.png" width="125" alt="">
           </b-col>
           </b-row>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
  </div>
</body>
</template>

<style scoped>
    
     .container{
       background: #EEEEEE;
       width: 30%;
       height: 500px;
       margin-top: 100px;
       padding-top: 80px;
     }
     .input{
       margin-top: 30px;
       margin-bottom: 20px;   
     }
     .btn{
       width: 100%;
       border-radius: 15px;
       margin-top: 20px;
       font-size: large;
     }
     .logo-login{
       margin-top: 0px;
       margin-left: 65px;
     }
    
</style>

<script>
export default {
  name: "Giris",
};
</script>
