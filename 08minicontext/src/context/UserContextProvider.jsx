import React, { Children } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState({
        name: 'Gautam',
        age: 25
    })
    return(
        <>
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
        </>
    )
}

export default UserContextProvider;