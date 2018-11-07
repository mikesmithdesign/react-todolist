import React from 'react';
import TodoList from './TodoList';

class App extends React.Component {

  constructor(){
    super();
    this.state= {
      items: []
    }

    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.updateItem = this.updateItem.bind(this)
    this.inputElement = React.createRef()
  }

  addItem(e) {
    e.preventDefault()
    const inputElement = this.inputElement.current

    if (inputElement.value !== '') {
      const newItem = {
        name: inputElement.value,
        key: Date.now(),
        completed: false
      }

      this.setState((prevState) => {
        return {
            items: prevState.items.concat(newItem)
        }
      })

      inputElement.value = ''


    }

  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item){
      return item.key !== key
    });

    this.setState({
      items: filteredItems
    })
  }

  updateItem(key) {
    var updatedItems = this.state.items.map(item => {
                  if(item.key === key)
                     return Object.assign({}, item, {completed:true})
                  return item
              });

              this.setState({
                items: updatedItems
              });
  }

  render(){
    return (
      <div className="container">
        <form onSubmit={this.addItem}>
          <input type="text" ref={this.inputElement} />
          <button type="submit">Add Item</button>
        </form>
        <TodoList
        items={this.state.items}
        delete={this.deleteItem}
        update={this.updateItem}
        />
      </div>
    )
  }
}

export default App
