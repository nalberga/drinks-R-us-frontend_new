import React from 'react';
import '../App.css';

/*can also do function Footer()*/
class Cart extends React.Component {
    render() {
       return (       
        <div class="row bg-info text-white">
        <div class="col">
          SKU: {this.props.product}
        </div>
        <div class="col">
          Units: {this.props.units}&nbsp;&nbsp;&nbsp;
          <button type="button" class="btn btn-outline-warning bg-success">+</button>
          <button type="button" class="btn btn-outline-warning bg-success">-</button>
        </div>
        <div class="col">
          Price: {this.props.price}
        </div>
      </div>  
       );
    }
  }

  export default Cart;