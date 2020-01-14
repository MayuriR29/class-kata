const Product = props => {
  const plus = (name) => {
    props.onVote(name, 1)
  };
  const minus = (name) => {
    props.onVote(name, -1)
  };
  return (
    <li >
      <span>{props.product.name}</span> - <span>votes: {props.product.votes}</span>
      <button onClick={() => plus(props.product.name)}>+</button>{" "}
      <button onClick={() => minus(props.product.name)}>-</button>
    </li>
  );
};

class GroceryApp extends React.Component {

  // Finish writing the GroceryApp class
  constructor(props) {
    super(props)
    this.state = { products: this.props.products }
  }

  onVote = (dir, vote) => {
    this.setState(this.state.products.map((product) => {
      if (product.name === dir) return (product.votes += vote)
      return product
    }))
  };

  render() {
    return (
      <ul>
        {/* Render an array of products, which should call this.onVote when + or - is clicked */}
        {this.state.products.map((eachProduct, id) => {
          return (

            <Product key={id} product={eachProduct} onVote={this.onVote} />
          )
        })}
      </ul>
    );
  }
}

document.body.innerHTML = "<div id='root'></div>";

ReactDOM.render(<GroceryApp
  products={[
    { name: "Oranges", votes: 0 },
    { name: "Bananas", votes: 0 }
  ]}
/>, document.getElementById('root'));
console.log(document.getElementById('root').innerHTML)
