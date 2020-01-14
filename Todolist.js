
const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

class TodoList extends React.Component {
  render() {
    const { items, onClick } = this.props;
    return (<ul onClick={onClick}>
      {items.map(item => <TodoItem item={item} onClick={(event) => this.handleItemClick(event, item)} />)}
    </ul>);
  }

  handleItemClick = (event, item) => {
    //code changes here
    if (!item.done) {
      this.props.onItemClick(item, event);
    } else {
      event.stopPropagation();
    }
  }
}


const items = [{ text: 'Buy grocery', done: true },
{ text: 'Play guitar', done: false },
{ text: 'Romantic dinner', done: false }
];

const App = (props) => <TodoList
  items={props.items}
  onItemClick={(item, event) => { console.log(item, event) }}
/>;

const rootElement = document.getElementById("root");
ReactDOM.render(<App items={items} />, rootElement);

