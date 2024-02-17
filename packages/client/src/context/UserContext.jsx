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

    const [users, setUser] = React.useState([
        {
            _id: 1,
            name: "User 1",
            email: ""
        },
        {
            _id: 2,
            name: "User 2",
            email: ""
        },
        {
            _id: 3,
            name: "User 3",
            email: ""
        },
        {
            _id: 4,
            name: "User 4",
            email: ""
        },
    ])

    const [marketItems, setMarketItems] = React.useState([
        {
            _id: 1,
            name: "Item 1",
            price: "0.1",
            quant: 4,
            image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 2,
            name: "Item 2",
            price: "0.2",
            quant: 4,
            image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 3,
            name: "Item 3",
            price: "0.3",
            quant: 4,
            image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 4,
            name: "Item 4",
            price: "0.3",
            quant: 4,
            image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 5,
            name: "Item 5",
            price: "0.3",
            quant: 4,
            image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        }
    ])

    const [forums, setForums] = React.useState([
        {
            _id: 1,
            title: "What is this thing I'm confused ?",
            desc: "how am I supposed to buy seeds Im so confused. where do I go? what do I do? help me out please. Someone please help me, please. I dont know what to do, someone, answer my question.",
            comments: [
                {
                    id: 1,
                    comment: "Random comment",
                    user_id: 1234
                }
            ]
        },
        {
            _id: 2,
            title: "What is this thing I'm confused ?",
            desc: "how am I supposed to buy seeds Im so confused. where do I go? what do I do? help me out please. Someone please help me, please. I dont know what to do, someone, answer my question.",
            comments: [
                {
                    id: 1,
                    comment: "Random comment",
                    user_id: 1234
                }
            ]
        },
        {
            _id: 3,
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

    const [forum, setForum] = React.useState(
        {
            _id: 1,
            title: "What is this thing I'm confused ?",
            desc: "how am I supposed to buy seeds Im so confused. where do I go? what do I do? help me out please. Someone please help me, please. I dont know what to do, someone, answer my question.",
            comments: [
                {
                    id: 1,
                    from: 0,
                    comment: "Random comment to 0",
                    user_id: 1
                },
                {
                    id: 2,
                    from: 1,
                    comment: "Random reply to 1",
                    user_id: 2
                },
                {
                    id: 3,
                    from: 2,
                    comment: "Random reply to 2",
                }
            ]
        }
    )

    const [cart, setCart] = React.useState([
        {
            _id: 1,
            name: "Item 1",
            price: "0.1",
            quant: 4,
            image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 2,
            name: "Item 2",
            price: "0.2",
            quant: 4,
            image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 3,
            name: "Item 3",
            price: "0.3",
            quant: 4,
            image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 4,
            name: "Item 4",
            price: "0.3",
            quant: 4,
            image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 5,
            name: "Item 5",
            price: "0.3",
            quant: 4,
            image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        }
    ])

    const [orders, setOrders] = React.useState([
        {
            _id: 1,
            name: "Item 1",
            price: "0.1",
            quant: 4,
            image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 2,
            name: "Item 2",
            price: "0.2",
            quant: 4,
            image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 3,
            name: "Item 3",
            price: "0.3",
            quant: 4,
            image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 4,
            name: "Item 4",
            price: "0.3",
            quant: 4,
            image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 5,
            name: "Item 5",
            price: "0.3",
            quant: 4,
            image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        }
    ])

    const fetchMarketplace = () => {
        try {
            axios.get(`${serverUrl}/marketplace`)
            .then(res => {
                // setMarketItems(res.data.marketplace)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const fetchForums = () => {
        try {
            axios.get(`${serverUrl}/forums`)
            .then(res => {
                setForums(res.data.forums)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const fetchForum = (id) => {
        try {
            axios.get(`${serverUrl}/forums/${id}`)
            .then(res => {
                setForum(res.data.forum)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const addToCart = (id, quant) => {
        try {
            axios.post(`${serverUrl}/cart`, {
                id,
                quant,
                userId: localStorage.getItem('id')
            })
            .then(res => {
                console.log(res.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const fetchCart = () => {
        try {
            axios.get(`${serverUrl}/cart`, {id: localStorage.getItem('id')})
            .then(res => {
                // setCart(res.data.cart)
                console.log(res.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const addComment = (id, from, comment, user_id) => {
        try {
            axios.post(`${serverUrl}/comment/${id}`, {
                comment,
                userId: user_id,
                from
            })
            .then(res => {
                console.log(res.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const Checkout = () => {
        try {
            axios.post(`${serverUrl}/checkout`, {cart})
            .then(res => {
                console.log(res.data)
                window.location.replace('/')
            })
        } catch (error) {
            console.log(error)
        }
    }    

    const fetchOrders = () => {
        try {
            axios.get(`${serverUrl}/orders`, {userId: localStorage.getItem('id')})
            .then(res => {
                setOrders(res.data.orders)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const createForum = (title, desc) => {
        try {
            axios.post(`${serverUrl}/forums`, {
                title,
                desc,
                userId: localStorage.getItem('id')
            })
            .then(res => {
                console.log(res.data)
                window.location.replace('/forums')
            })
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <UserContext.Provider value={{
            userError,
            marketItems,
            forums,
            forum,
            users,
            cart,
            orders,
            createForum,
            Checkout,
            fetchCart,
            fetchOrders,
            addComment,
            fetchForum,
            addToCart,
            fetchForums,
            fetchMarketplace
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => React.useContext(UserContext)