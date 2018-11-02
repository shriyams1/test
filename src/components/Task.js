import React, { Component } from 'react';
import { BrowserRouter as Router,Link, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = (params) => {
    return ( <h1> Welcome To {params.taskname} </h1>)
  }

class Task extends Component {
  render() {
    const spanStyle = {
      textDecoration: this.props.todo.done ? 'line-through' : 'none'
    }
    const isVisible = this.props.todo.isVisible;

    return (
        <Router>
            <div className="task-container">           
                <Link to="/detailPage/:taskname" target="_blank" component={User}>
                <div className= { isVisible ? "task" : "hide" }>
                    <div className="wrapper">
                    <div className="table table--5cols table--collapse">
                            <div className="table-row table-row--head">
                                <div className="table-cell column-heading">Task Name</div>
                                <div className="table-cell column-heading">Task Category</div>
                                <div className="table-cell column-heading">Task Status</div>
                            </div>
                    
                    <div className="table-row is-striped">
                        <div className="table-cell date-cell">
                            <div className="table-cell--heading">Date</div>
                            <div className="table-cell--content date-content">
                                <span style={spanStyle}>{this.props.todo.value}</span>
                            </div>
                        </div>
                        <div className="table-cell topic-cell">
                            <div className="table-cell--content title-content">
                                <span style={spanStyle}>{this.props.todo.selectValue}</span>
                            </div>
                        </div>
                        <div className="table-cell access-link-cell">
                            <div className="table-cell--heading">Access Link</div>
                            <div className="table-cell--content access-link-content">
                            <button
                            onClick={() => this.props.handleClick(this.props.index)}>
                            {this.props.todo.done ? 'Undo' : 'Complete'}
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>  
                </div>
                </Link>
                <Route path="/detailPage/:taskname" exact strict render={({match})=>(
                <User taskname={match.params.taskname}/>
                )}/>
            </div>
      </Router>
    )
  }
}

export default Task;