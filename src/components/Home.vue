<template>
    <div class="text-center">
        <h1>Welcome To Industry Tycoon</h1>
        <p>To start the game head to the loans page then start trading</p>
        <hr>
        
        <p>Your Funds: {{funds}} Your Debt: {{debt}}</p>
    </div>
</template>
<script>
export default {
  computed: {
     funds(){
            return this.$store.getters.funds
        },
    debt(){
      return this.$store.getters.debt
    }
   
  }
  
}
</script> 
