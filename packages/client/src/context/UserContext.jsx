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

    const [users, setUsers] = React.useState([
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

    const fetchUsers = () => {
        axios.get(`${serverUrl}/users`)
        .then(res => {
            console.log(res.data.users)
            setUsers(res.data.users)
        })
    }

    const [marketItems, setMarketItems] = React.useState([
        {
            _id: 1,
            name: "Item 1",
            price: "0.1",
            quantity: 4,
            img: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 2,
            name: "Item 2",
            price: "0.2",
            quantity: 4,
            img: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 3,
            name: "Item 3",
            price: "0.3",
            quantity: 4,
            img: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 4,
            name: "Item 4",
            price: "0.3",
            quantity: 4,
            img: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 5,
            name: "Item 5",
            price: "0.3",
            quantity: 4,
            img: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
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
            quantity: 4,
            img: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 2,
            name: "Item 2",
            price: "0.2",
            quantity: 4,
            img: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 3,
            name: "Item 3",
            price: "0.3",
            quantity: 4,
            img: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 4,
            name: "Item 4",
            price: "0.3",
            quantity: 4,
            img: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 5,
            name: "Item 5",
            price: "0.3",
            quantity: 4,
            img: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        }
    ])

    const [orders, setOrders] = React.useState([
        {
            _id: 1,
            name: "Item 1",
            price: "0.1",
            quantity: 4,
            img: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 2,
            name: "Item 2",
            price: "0.2",
            quantity: 4,
            img: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 3,
            name: "Item 3",
            price: "0.3",
            quantity: 4,
            img: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 4,
            name: "Item 4",
            price: "0.3",
            quantity: 4,
            img: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        },
        {
            _id: 5,
            name: "Item 5",
            price: "0.3",
            quantity: 4,
            img: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-166485,resizemode-75,msid-47594468/magazines/panache/benefits-of-these-six-super-seeds.jpg"
        }
    ])

    const [toDo, setToDo] = React.useState([
        // Day 0
        [
          { task: 'Buy tomato seeds', done: false },
          { task: 'Prepare soil', done: false },
          { task: 'Plant tomato seeds', done: false }
        ],
        // Day 1
        [
          { task: 'Water tomato seeds', done: false }
          // Additional tasks based on specific needs
        ],
        // Day 2
        [
          { task: 'Check soil moisture', done: false },
          { task: 'Provide sunlight', done: false }
          // Additional tasks based on specific needs
        ],
        // Day X (Adjust as needed)
        [
          { task: 'Transplant seedlings (if applicable)', done: false },
          { task: 'Continue watering and monitoring', done: false },
          // Additional tasks based on specific needs
        ]
    ]);

    const [messages, setMessages] = React.useState([
        {
          from: 'user',
          message: 'Hello'
        },
        {
          from: 'bot',
          message: 'Hi, how can I help you?'
        }
    ])

    const [reminders, setReminders] = React.useState([])

    const [day, setDay] = React.useState(0)

    const [profile, setProfile] = React.useState({})

    const fetchMarketplace = () => {
        try {
            axios.get(`${serverUrl}/marketplace`)
            .then(res => {
                setMarketItems(res.data.marketplace)
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
                console.log(res.data.forums)
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
                console.log(res.data.forum)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const addToCart = (id, quant) => {
        try {
            axios.post(`${serverUrl}/cart`, {
                id,
                quantity: quant,
                userId: localStorage.getItem('id')
            })
            .then(res => {
                console.log(res.data)
                setCart(res.data.cart)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const fetchCart = () => {
        try {
            axios.get(`${serverUrl}/cart/${localStorage.getItem('id')}`)
            .then(res => {
                setCart(res.data.cart)
                console.log(res.data.cart)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const addComment = (id, from, comment) => {
        try {
            axios.post(`${serverUrl}/comment`, {
                id,
                comment,
                userId: localStorage.getItem('id'),
                from
            })
            .then(res => {
                console.log(res.data)
                setForum(res.data.forum)
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
            axios.get(`${serverUrl}/orders/${localStorage.getItem('id')}`)
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

    const plantChosen = (setStep) => {
        localStorage.setItem('plant', 'tomato')
        localStorage.setItem('day', 0)
        setStep(2)
        axios.post(`${serverUrl}/plant`, {plant: localStorage.getItem('plant'), id: localStorage.getItem('id'), tasks: toDo})
    }

    const checkIfAllChecked = () => {
        return !toDo[day].some(task => !task.done)
    }

    const nextDay = () => {
        const check = checkIfAllChecked()
        console.log(check)
        // if(check){
            localStorage.setItem('day', Number(localStorage.getItem('day')) + 1)
            setDay(day => day+1)
            console.log(day+1)
            axios.post(`${serverUrl}/day`, {day: parseInt(localStorage.getItem('day')), id: localStorage.getItem('id')})
            .then(res => {
                setProfile(res.data.profile)
                console.log(res.data)
            })
        // }
    }

    const fetchProfile = () => {
        try {
            axios.get(`${serverUrl}/profile/${localStorage.getItem('id')}`)
            .then(res => {
                setProfile(res.data.profile)
                localStorage.setItem('day', res.data.profile.day)
                setDay(res.data.profile.day)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const updateTask = (newToDo, plant) => {
        axios.post(`${serverUrl}/task`, {tasks: newToDo, plant, id: localStorage.getItem('id')})
        .then(res => {
            console.log(res.data)
        })
    }

    const fetchTask = () => {
        axios.get(`${serverUrl}/task/${localStorage.getItem('plant')}/${localStorage.getItem('id')}`)
        .then(res => {
            console.log(res.data.tasks)
            setToDo(res.data.tasks)
        })
    }

    const fetchMessages = () => {
        axios.get(`${serverUrl}/chat`)
        .then(res => {
            console.log(res.data)
            setMessages(res.data.messages)
        })
    }

    const sendMessage = async(message) => {
        const openaiApiEndpoint = 'https://api.openai.com/v1/chat/completions';
        const plant = localStorage.getItem('plant')
        let prompt = `Imagine you're a ${plant} and I'm a human. Here is my message: "${message}". Reply to me. No need to start with "I'm a ${plant} and I prefer...". Just reply as if you're a ${plant} and you're answering the question.`
        axios.post(openaiApiEndpoint, 
            {
                model:"gpt-3.5-turbo",
                messages: [{role: 'user', content: prompt}],
                temperature: 0.7
            }, 
            {
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + import.meta.env.VITE_OPENAI_API_KEY
            }
            }
        )
        .then(res => {
            const reply = res.data.choices[0].message.content
            setMessages([...messages, { from: 'user', message: message }, {from: 'bot', message: reply}])
        })
    }

    const addReminder = (time, task, setReminderSet) => {
        console.log(time, task)
        setReminderSet(true)
        axios.post(`${serverUrl}/reminder`, {time, task, id: localStorage.getItem('id')})
    }

    const fetchReminder = () => {
        console.log('fetching reminders')
        axios.get(`${serverUrl}/reminder/${localStorage.getItem('id')}`)
        .then(res => {
            console.log(res.data.reminders)
            setReminders(res.data.reminders)
        })
    }

    const sendReminder = () => {
        console.log('running');
        const now = new Date();
        const currentHours = now.getHours();
        const currentMinutes = now.getMinutes();
        reminders.forEach(reminder => {
            const [reminderHours, reminderMinutes] = reminder.time.split(':').map(Number);
            if (currentHours === reminderHours && currentMinutes === reminderMinutes) {
                alert(`Reminder: ${reminder.task}`);
                // setReminders(prevReminders => prevReminders.filter((_, i) => i !== index))
            }
        });
    }

    return(
        <UserContext.Provider value={{
            userError,
            marketItems,
            profile,
            forums,
            forum,
            users,
            cart,
            orders,
            day,
            toDo,
            messages,
            reminders,
            fetchReminder,
            sendReminder,
            addReminder,
            setMessages,
            fetchTask,
            fetchMessages,
            sendMessage,
            setToDo,
            fetchProfile,
            nextDay,
            setDay,
            plantChosen,
            fetchUsers,
            createForum,
            Checkout,
            fetchCart,
            fetchOrders,
            addComment,
            fetchForum,
            addToCart,
            fetchForums,
            updateTask,
            fetchMarketplace
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => React.useContext(UserContext)