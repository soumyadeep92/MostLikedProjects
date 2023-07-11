import React, { Component } from 'react'
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';

export class CreateProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='light'>
          <h5 className='grey-text text-darken-8'>Create New Project</h5>
          <div className='input-field'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='content'>Project Contents</label>
            <textarea id='content' className='materialize-textarea' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0'>Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject)
