 import React from 'react';
 import './Join.css';
// import ErrorCmp from './ErrorCmp/ErrorCmp';



 class Join extends React.Component {
     constructor(props){
         super(props);
         this.state = {
            name: "",
            email:"",
            username:"",
            password:"",
            joinError:"sfsfsf"
         };
     }

    render() {
        return(
            <form className ="card">
                <div className="card-title">
                <h1>JOIN</h1> 
                </div>
                {/* {this.props.ifError ?  <ErrorCmp error={this.state.joinError}/> : "" } */}
                <div className="card-item">
                    <label>Name *</label>
                    <input type = "text" required  placeholder="enter your name" autoFocus="true" onChange = {this.onChange} name="name"></input>
                </div>
                <div className="card-item">
                    <label>Email *</label>
                    <input type = "email" required  placeholder="enter your email" onChange = {this.onChange} name="email"></input>
                </div>
                <div className="card-item">
                    <label>Username</label>
                    <input type = "text" required placeholder="@ username" onChange = {this.onChange} name="username"></input>
                </div>
                <div className="card-item">
                    <label>Password *</label>
                    <input type = "password" required placeholder="enter password" pattern = ".{6,10}" title="use any characters upto length six to ten" onChange = {this.onChange} name="password"></input>
                </div>
               
                <div className="card-btn">
                    <button type="submit" onClick={this.onSubmitJoinForm} className="c-btn">Join</button>
                </div>

            </form>
        );
    }
    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }


    
    
        onSubmitJoinForm = () => {
            fetch('http://getworklog.herokuapp.com/join', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.email,
                    username: this.state.username,
                    password: this.state.password,
                    name: this.state.name
                })
            })

        }}

export default Join;