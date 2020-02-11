<template>
  <div>
    <b-card-group columns>
      <app-owned-items v-for="(business,id) in portfolio" :key="id" :business="business"></app-owned-items>
    </b-card-group>
  </div>
</template>
<script>
import OwnedItems from "./OwnedItems";
export default {
  data() {
    return {};
  },
  computed: {
    portfolio() {
      return this.$store.getters.portfolio;
    }
  },
  components: {
    appOwnedItems: OwnedItems
  }
};
</script>script  
