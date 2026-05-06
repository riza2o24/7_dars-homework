import { FaBeer } from 'react-icons/fa';
import Sidebar from './components/sidebar/Sidebar';
import logo from './assets/logo.png'
import dashboard from './assets/category.png'
import order from './assets/order.png'
import statistics from './assets/statistics.png'
import customers from './assets/customers.png'
import messages from './assets/messages.png'
import authentication from './assets/authentication.png'
import HelpCenter from './assets/HelpCenter.png'
import Header from './components/header/Header';

const data =[
  {
    title: "Dashboard",
    icon: dashboard,
    link: "/dashboard"
  },

  {
    title: "Order",
    icon: order,
    link: "/order"
  },

  {
    title: "Statistics",
    icon: statistics,
    link: "/statistics"
  },


  {
    title: "Customers",
    icon: customers,
    link: "/customers"
  },


  {
    title: "Messages",
    icon: messages,
    link: "/messages"
  },


  {
    title: "Authentication",
    icon: authentication,
    link: "/authentication"
  },

  {
    title: "Help Center",
    icon: HelpCenter,
    link: "/Help Center"
  },
]


function App() {
  return (
    <div>
      <Header logo={logo}/>
     <Sidebar data={data}/>
    </div>
  )
}

export default App