import React from 'react';
import FlipMove from 'react-flip-move';

class TodoList extends React.Component {
  delete(key) {
    this.props.delete(key)
  }
  update(key) {
    this.props.update(key)
  }
  render() {

    return (
      <FlipMove typeName="ul" duration={300} easing="ease">
        {this.props.items.map((item) =>

          <li key={item.key} className = {item.completed ? "done" : "notDone"}>
            {item.name}
            <span className="delete" onClick={ () => this.delete(item.key)}>&times;</span>
            <span className="done" onClick={() => this.update(item.key)}>&#10004;</span>
          </li>
          )
        }
      </FlipMove>
    )
  }
}

export default TodoList
