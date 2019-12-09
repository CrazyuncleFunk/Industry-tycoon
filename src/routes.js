import Home from './components/Home'
import Portfolio from './components/portfolio/Portfolio.vue'
import Shop from './components/shop/Shop'
import Loans from './components/loans/Loans.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/shop', component: Shop },
  { path: '/loans', component: Loans }
]
