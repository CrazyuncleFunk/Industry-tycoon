const state = {
  funds: 0,
  debt:0,
  businesses: [
    { name: "Clothing Factory", cost: 10000, upgrade: 2,max:5, revenue: 100 },
    { name: "Sporting Goods Factory", cost: 20000, upgrade: 2,max:7, revenue: 200 },
    { name: "Electronic Goods Factory", cost: 50000, upgrade: 2,max:8, revenue: 500 },
    { name: "Car Factory", cost: 100000, upgrade: 2,max:9, revenue: 800 },
    { name: "Areospace Factory", cost: 140000, upgrade: 2,max:19, revenue: 100 },
    { name: "Design Company", cost: 200000, upgrade: 2,max:7, revenue: 2000 },
    { name: "Law Firm", cost: 300000, upgrade: 2,max:10, revenue: 2000 },
    { name: "University", cost: 400000, upgrade: 2,max:12, revenue: 4000 },
    { name: "Internet Market", cost: 400000, upgrade: 2,max:15, revenue: 2000 }
  ],
  portfolio: []
};
const mutations = {
  BUY_BUSINESS(state, { businessName, businessCost }) {
    const record = state.portfolio.find(element => element.name ==  businessName);
    const business = state.businesses.find(element => element.name ==  businessName);
    if(!record){
      if (state.funds >= businessCost) {
        state.funds -= businessCost;
        
        state.portfolio.push({
          name: businessName,
          upgrade: business.upgrade,
          cost: business.cost * (business.upgrade),
          max: business.max,
          revenue: business.revenue
        });
        state.businesses.splice(state.businesses.indexOf(business),1);
      } else {
        alert("Insuffient Funds!");
      }
    }else{
      alert("Already Owned!");
    }
 
  },
  UPGRADE(state, { businessName}) {
    const record = state.portfolio.find(element => element.name ==  businessName);
    if(state.portfolio[state.portfolio.indexOf(record)].upgrade < state.portfolio[state.portfolio.indexOf(record)].max){
      if(state.funds >= record.cost){
        state.funds -= record.cost
        state.portfolio[state.portfolio.indexOf(record)].revenue = record.revenue * record.upgrade;
        state.portfolio[state.portfolio.indexOf(record)].cost *= record.upgrade;
        state.portfolio[state.portfolio.indexOf(record)].upgrade++;
        
       
      }else{
        alert("Insuffient Funds!");
      }
    }else{
      alert("Max Upgrade!");
    }
    
    
    
  },
  LOAN_MONEY(state,amount){
    state.debt += amount;
    state.funds += amount;
  },
  REPAY_MONEY(state,amount){
    if(amount <= state.funds){
    state.debt -= amount;
    state.funds -= amount;
  }else{
    alert("Insuffient Funds!");
  }
  },
  END_DAY(state) {
    state.portfolio.forEach((x)=> {state.funds += x.revenue})
    state.funds -= state.debt / 200
    if(state.funds < 0){
      state.businesses = [
        { name: "Clothing Factory", cost: 10000, upgrade: 2,max:5, revenue: 100 },
        { name: "Sporting Goods Factory", cost: 20000, upgrade: 2,max:7, revenue: 200 },
        { name: "Electronic Goods Factory", cost: 50000, upgrade: 2,max:8, revenue: 500 },
        { name: "Car Factory", cost: 100000, upgrade: 2,max:9, revenue: 800 },
        { name: "Areospace Factory", cost: 140000, upgrade: 2,max:19, revenue: 100 },
        { name: "Design Company", cost: 200000, upgrade: 2,max:7, revenue: 2000 },
        { name: "Law Firm", cost: 300000, upgrade: 2,max:10, revenue: 2000 },
        { name: "University", cost: 400000, upgrade: 2,max:12, revenue: 4000 },
        { name: "Internet Market", cost: 400000, upgrade: 2,max:15, revenue: 2000 }
      ];
      state.portfolio = [];
      state.funds = 0;
      state.debt = 0;
      alert('Game Over');
    }
  }
};
const actions = {
  upgrade({ commit }, order) {
    commit("UPGRADE", order);
  },
  buyBusiness({ commit }, order) {
    commit("BUY_BUSINESS", order);
  },
  endDay({ commit }){
    commit("END_DAY");
  },
  loanMoney({commit}, amount){
    commit("LOAN_MONEY",amount)
  },
  repayMoney({commit}, amount){
    commit("REPAY_MONEY",amount)
  }
};
const getters = {
  funds(state) {
    return state.funds;
  },
  debt(state) {
    return state.debt;
  },
  businesses(state) {
    return state.businesses.map(business => {
      return {
        name: business.name,
        cost: business.cost,
        upgrade: business.upgrade,
        revenue: business.revenue
      };
    });
  },
  portfolio(state) {
    return state.portfolio.map(portfolio => {
      return {
        name: portfolio.name,
        cost: portfolio.cost,
        upgrade: portfolio.upgrade,
        revenue: portfolio.revenue
      };
    });
  }
};
export default {
  state,
  mutations,
  actions,
  getters
};
