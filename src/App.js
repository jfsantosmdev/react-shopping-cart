import { Component } from 'react';
import Layout from './components/Layout'
import Products from './components/Products'
import Title from './components/Title'
import Navbar from './components/Navbar'
class App extends Component {
  state = {
    products: [
      { name : 'arbejas', price: 5, img: '/products/arbejas.jpg' },
      { name : 'lechuga', price: 10, img: '/products/lechuga.jpg' },
      { name : 'tomate', price: 15, img: '/products/tomate.jpg' }
    ],
    cart: []
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
  render() {
    return (
      <div>
        <Navbar cart={this.state.cart} />
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
