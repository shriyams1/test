import React, { Component } from 'react';
import '../style/App.scss';

import Form from './Form';
import List from './List';

class App extends Component {
  constructor() {
    super();

    this.state = {
      errorMessage: null,
      inputValue: "",
      selectedVal:"",
      filterSelection:"",
      currFilter:"all",
      todos: [
        { value: 'Cut the Hair', selectValue:'red',  done: false, isVisible: true },
        { value: 'Go for Shopping', selectValue:'green', done: true }
      ]
    }

  }
  componentWillMount(){
    localStorage.getItem('todos') && this.setState({
      todos: JSON.parse(localStorage.getItem('todos'))
    })
  }
  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('todos', JSON.stringify(nextState.todos));
    localStorage.setItem('todosDate', Date.now())
  }


  handleChange = (evt) => {
    this.setState({ inputValue: evt.target.value });
  }
  handleSelectChange = (evt) => {
    this.setState({selectValue: evt.target.value});
  }

  handleClick = (index) => {
    const todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  }

  handleFilter = (evt) => {
    let values = JSON.parse(localStorage.getItem("todos"));
    let todos = this.state.todos;
    this.setState({ 
      todos,
      currFilter: evt.target.value,
    });
    console.log(evt.target.value)
    todos = todos.map(item => {
      item.isVisible = (item.selectValue === evt.target.value || evt.target.value === "all");
      return item;
    });
    
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    if(this.state.inputValue === ''){
        this.setState({ errorMessage: 'sdgre' });
    }
    else{
        const todos = this.state.todos;
        const currFilter = this.state.currFilter;
        todos.push({ value: this.state.inputValue, selectValue: this.state.selectValue, done: false, isVisible: (this.state.selectValue === currFilter || currFilter === "all" )});
        this.setState({ todos, newItem: "", inputValue: '' });
        this.setState({ todos, newItem: "", selectValue: '' });
        this.setState({ errorMessage: '' });
        localStorage.setItem("todos",(todos));
        
    } 
  }

  render() {
    const colorsLabel = ["red", "blue", "green"];
    const categoryList = colorsLabel.map((number, index) =>
        <option value={number} key={index}>{number}</option>
    );
    const filterList = colorsLabel.map((number, index) =>
        <button value={number} key={index}>{number}</button>
    );
    return (
      <div className="App">
      <div className="filter-unit">
            <p>Filter By </p>
            
            <div className="category-label" onClick={this.handleFilter}>
            <button value="all" key={0}>All</button>
            {filterList}</div>
        </div>
        <Form
          handleChange={this.handleChange}
          handleSelectChange={this.handleSelectChange}
          handleSubmit={this.handleSubmit}
          inputValue={this.state.inputValue}
          selectValue={this.state.selectValue} categoryList={categoryList}
        />
        

        <List
          inputValue={this.state.inputValue}
          handleClick={this.handleClick}
          handleSelectChange={this.handleSelectChange}
          todos={this.state.todos}
        />
        
      </div>
    );
  }
}

export default App;