import React, { Component } from "react";
import './Users.css';

import UsersList from './UsersList';

axios.get('https://blockchain.info/ticker', {
    mode: 'cors'
})

class Users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            inputValue:""
        };
    }

    addUser = (event) => {
        event.preventDefault();


        let newUser = {
            id: Date.now(),
            name: this.state.inputValue,
        }

        console.log(newUser);


        this.setState((state) => {
            return ({
                users: state.users.concat(newUser)
            })
        })

        this.setState({inputValue:""});
    }



    removeUser = (userID) => {
        this.setState(state => {
            return ({
                users: state.users.filter((user) => { return (user.id !== userID) })
            });
        });
    }

    

    render() {
        console.log(this.state.inputValue);
        return (
            <div className="users-main">
                <h1>User's List</h1>
                <form onSubmit={this.addUser}>
                    {/* <input ref={(element) => { this._inputName = element; }} type="text" placeholder="Enter name" /> */}
                    <input onChange={(e)=>this.setState({inputValue:e.target.value})}  value={this.state.inputValue} type="text" placeholder="Enter name" />
                    <button type="submit">Add user</button>
                </form>
                <UsersList usersList={this.state.users} removeUserMethod={this.removeUser} />
            </div>
        )
    }
}

export default Users;