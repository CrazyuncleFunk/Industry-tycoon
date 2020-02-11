<template>
  <b-card :title="business.name" align="center">
    <b-card-text align="center">Daily Revenue: {{business.revenue}}</b-card-text>
    <b-card-footer align="right">
      Cost:{{business.cost}}
      <b-button href="#" variant="success" @click="upgrade">Upgrade</b-button>
    </b-card-footer>
  </b-card>
</template> 
<script>
export default {
  props: ["business"],
  methods: {
    upgrade() {
      const order = {
        businessName: this.business.name
      };
      this.$store.dispatch("upgrade", order);
    }
  }
};
</script> 