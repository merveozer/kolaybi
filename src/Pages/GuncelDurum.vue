<template>
  <div>
    <NavSide />
    <b-container fluid class="bv-example-row bv-example-row-flex-cols">
      <b-row cols="12">
        <b-navbar class="navbar" style="background-color: white; height: 40px;">
          <b-col cols="5" offset-md="2"> 
            <nav-item class="side-item"> Güncel Durum <b-icon icon="pie-chart-fill" > </b-icon> </nav-item> 
            <nav-item class="side-item"> Notlar <b-icon icon="file-earmark" > </b-icon> </nav-item>
          </b-col>
        </b-navbar>
      </b-row>
      <b-row align-v="center">
        <b-col cols="7" offset-md="2" class="ml-md-auto p-5">
          <b-table striped hover :items="items" :fields="fields"></b-table
        ></b-col>
        <b-col cols="2">
          <b-calendar
            nav-button-variant="primary"
            label-help=""
            start-weekday="1"
            hide-header="true"
            locale="tr"
          ></b-calendar>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols=""> </b-col>
      </b-row>
    </b-container>

    
  </div>
</template>

<style scoped>
.side-item-2{
  margin-left: 20px;
}
</style>

<script>
import NavSide from "./NavSide.vue";

export default {
  name: "GuncelDurum",
  components: {
    NavSide,
  },
  data() {
    return {
      // Note `isActive` is left out and will not appear in the rendered table
      fields: ["first_name", "last_name", "age"],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
};
</script>
