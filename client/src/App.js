import React from 'react'
import NavBar from './components/NavBar'
import Items from './components/Items'
import UserInfo from './components/User'

export default class App extends React.Component { 
    render() {
        return (
            <div>
                <NavBar />
            </div>

        )
    }

    render() {
        return (
            <div>
                <Items/>
            </div>

        )
    }
   
    render() {
        return (
            <div>
                <UserInfo/>
            </div>

        )
    }

}

