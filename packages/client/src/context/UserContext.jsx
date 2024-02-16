import React from "react";
import axios from 'axios'
import { useAuthContext } from "./AuthContext"

const UserContext = React.createContext()

const serverUrl = 'http://localhost:5000/api'

export const UserContextProvider = ({children}) => {


    const { email } = useAuthContext()

    const [userError, setUserError] = React.useState({
        error: false,
        message: ""
    })

    const [marketItems, setMarketItems] = React.useState([
        {
            id: 1,
            name: "Item 1",
            price: "0.1",
            quant: 4,
            image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            id: 2,
            name: "Item 2",
            price: "0.2",
            quant: 4,
            image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            id: 3,
            name: "Item 3",
            price: "0.3",
            quant: 4,
            image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            id: 4,
            name: "Item 4",
            price: "0.3",
            quant: 4,
            image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            id: 5,
            name: "Item 5",
            price: "0.3",
            quant: 4,
            image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        }
    ])

    const [forums, setForums] = React.useState([
        {
            id: 1,
            title: "What is this thing I'm confused ?",
            desc: "how am I supposed to buy seeds Im so confused. where do I go? what do I do? help me out please. Someone please help me, please. I dont know what to do, someone, answer my question.",
            comments: [
                {
                    id: 1,
                    comment: "Random comment",
                    user_id: 1234
                }
            ]
        }
    ])

    const addToCart = () => {
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
        <UserContext.Provider value={{
            userError,
            marketItems,
            forums,
            addToCart
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => React.useContext(UserContext)