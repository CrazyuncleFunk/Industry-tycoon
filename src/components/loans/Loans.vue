<template>
    <div class=" offset-sm-4  col-sm-4 ">
        <h1 class="">Loans</h1>
        <p class="">Intrest Is 0.5% payed daily</p>
        <div class="form-inline "><input type="number" v-model="loanAmount" class="form-control"/><button @click="loanMoney" class="btn btn-success">Loan Money</button></div>
        <p>Current Debt: {{debt}}</p>
        <div class="form-inline"><input type="number" v-model="repayAmount" class="form-control"/><button @click="repayMoney"  class="btn btn-success">Repay Money</button></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            loanAmount:0,
            repayAmount:0
        }
        
    },
    methods:{
        loanMoney(){
            let amount = parseInt(this.loanAmount)
            this.$store.dispatch("loanMoney", amount);
            this.loanAmount = 0;
        },
        repayMoney(){
            let amount = parseInt(this.repayAmount)
            this.$store.dispatch("repayMoney", amount);
            this.repayAmount = 0;
        }
    },
    computed: {
        debt() {
        return this.$store.getters.debt;
        },
        
    },
}
</script>script