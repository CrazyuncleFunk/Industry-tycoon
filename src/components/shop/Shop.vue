<template>
  <div>
    <b-card-group columns>
      <app-items v-for="(business,id) in businesses" :key="id" :business="business"></app-items>
    </b-card-group>
  </div>
</template>
<script>
import Items from "./Items";
export default {
  data() {
    return {};
  },
  computed: {
    businesses() {
      return this.$store.getters.businesses;
    }
  },
  components: {
    appItems: Items
  }
};
</script>script  
