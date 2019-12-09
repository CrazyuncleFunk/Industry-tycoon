<template>
       <b-card :title="thing.name" align="center">
      <b-card-text align="center" >
          Daily Revenue: {{thing.revenue}}
      </b-card-text>
      <b-card-footer align="right" >
        
        Cost:{{thing.cost}} <b-button href="#" variant="success" >Buy</b-button>
      </b-card-footer>
    </b-card>
</template> 
<script>
export default {
     props:['thing'],
}
</script> 