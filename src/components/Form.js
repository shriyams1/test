import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <div className="form">
        <form>
            <div className="select-category">
                <span className="selection-label">Task Name:</span>
                <div className="form-field">
                    <input className="input-box" type="text" placeholder="Enter Task To Be Done"
                    onChange={(evt) => this.props.handleChange(evt)}
                    value={this.props.inputValue}
                />
                </div>
            </div>
            <label className="select-category">
                <span className="selection-label">Select Task Category:</span>
                <div className="form-field">
                    <select className="selection-field" value={this.props.selectValue} onChange={(evt) => this.props.handleSelectChange(evt)}>
                        {this.props.categoryList}
                    </select>
                </div>
            </label>
          <div className="error-text">{this.props.errorMessage}</div>
          <button className="submit" onClick={(evt) => this.props.handleSubmit(evt)}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;