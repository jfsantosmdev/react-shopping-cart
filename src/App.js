import { Component } from 'react';
import Layout from './components/Layout'
import Products from './components/Products'
import Title from './components/Title'
import Navbar from './components/Navbar'
class App extends Component {
  state = {
    products: [
      { name : 'Cerveza Gallo - Six pack', price: 5, img: '/products/gallo.jpg' },
      { name : 'Cerveza El Zapote - Six pack', price: 10, img: '/products/zapote.png' },
      { name : 'Cerveza Corona - Six pack', price: 15, img: '/products/corona.jpg' }
    ],
    cart: [],
    isCartVisible: false
  }

  addToCart = (product) => {
    const { cart } = this.state
    if(cart.find(x => x.name === product.name)){
      const newCart = cart.map(x => x.name === product.name ? 
        ({
          ...x,
          qty: x.qty + 1
        })
        : x)

      return this.setState({ cart: newCart })
    }

    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        qty: 1
      })
    })
  }

  showCart = () => {
    if(!this.state.cart.length){
      return
    }
    
    this.setState({ isCartVisible: !this.state.isCartVisible })
  }

  render() {
    const { isCartVisible } = this.state
    return (
      <div>
        <Navbar 
          cart={this.state.cart} 
          isCartVisible={isCartVisible} 
          showCart={this.showCart} 
        />
        <Layout>
          <Title />
          <Products 
            addToCart = { this.addToCart }
            products = { this.state.products }
          />
        </Layout>
      </div>
    )
  }
}
export default App;
