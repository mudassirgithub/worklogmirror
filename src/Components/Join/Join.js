import React from 'react'
import './Join.css'
import ErrorCmp from '../ErrorCmp/ErrorCmp';

class Join extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
      joinError: 'some error'
    }
  }

  render () {
    return (
      <form className='card-join'>
        <div className='card-title'>
          <h1>JOIN</h1>
        </div>
        {this.state.joinError && <ErrorCmp error={this.state.joinError}/>}

        <div className='card-item'>
          <label>Name *</label>
          <input
            type='text'
            required
            placeholder='enter your name'
            autoFocus
            onChange={this.onChange}
            name='name'
          />
        </div>
        <div className='card-item'>
          <label>Email *</label>
          <input
            type='email'
            required
            placeholder='enter your email'
            onChange={this.onChange}
            name='email'
            
          />
        </div>
        <div className='card-item'>
          <label>Username</label>
          <input
            type='text'
            required
            pattern='[a-z0-9]{6,18}'
            title='use no special ,Uppercase characters & length upto six to eighteen'
            placeholder='username'
            onChange={this.onChange}
            name='username'
          />
        </div>
        <div className='card-item'>
          <label>Password *</label>
          <input
            type='password'
            required
            placeholder='enter password'
            pattern='.[A-Za-z0-9]{6,10}'
            title='use no special characters &  length upto six to ten'
            onChange={this.onChange}
            name='password'
          />
        </div>

        <div className='card-btn'>
          <button
            type='submit'
            onClick={this.onSubmitJoinForm}
            className='c-btn'
          >
            Join{' '}
          </button>
        </div>
      </form>
    )
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmitJoinForm = () => {
    fetch('http://getworklog.herokuapp.com/join', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(data  => {
        if (data.hasError === true) {
          console.log(data.msg);
          this.setState((state) => {
             
          });
        }
      })
  }
}

export default Join
