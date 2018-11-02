import React from 'react';

import Task from './Task';

class List extends React.Component {

  render() {
    return (
      <div className="list">
        {this.props.todos.map((todo, index) => {
          return (
            <Task
              inputValue={this.props.inputValue}
              handleClick={this.props.handleClick}
              index={index}
              key={index}
              todo={todo}
            />
          )
        })}
      </div>
    )
  }
}

export default List;