import React from 'react'
import Card from '../components/Game/Card'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const Row = ({task, setToDo, toDo, day}) => {

  const { updateTask } = useUserContext()

  const handleClick = (e, taskName) => {
    console.log(toDo[day])
    const newTask = toDo[day].map(task => {
      if(task.task == taskName){
        task.done = !task.done
      }
      return task
    })
    
    toDo[day] = newTask

    const newToDo = toDo

    setToDo(newToDo)
    
    updateTask(newToDo, localStorage.getItem('plant'))
  }
  return (
    <div className=''>
      <div className='flex justify-between py-5'>
        <p className='feather'>{task.task}</p>
        <input onClick={e => handleClick(e, task.task)} type="checkbox" className='w-[50px]' />
      </div>
      <hr />
    </div>
  )

}

const Game = () => {
  const { nextDay, day, fetchProfile, profile, toDo, setToDo, fetchTask } = useUserContext()
  const [step, setStep] = React.useState(localStorage.getItem('plant') == 'tomato' ? 2 : 1)
  const [hurt, setHurt] = React.useState(false)
  React.useEffect(() => {
    if(hurt){
      setTimeout(() => {
        setHurt(false)
      }, 3000)
    }
  }, [hurt])

  React.useEffect(() => {
    fetchProfile()
    fetchTask()
  }, [])
  
  const plants = [
    {
      img: '/tomato.png',
      name: 'Tomato'
    },
    {
      img: '/pumpkin.png',
      name: 'Pumpkin'
    },
    {
      img: '/carrot.png',
      name: 'Carrot'
    },
    {
      img: '/cucumber.png',
      name: 'Cucumber'
    }
  ]
  return (
    <>
      {step == 1 ? 
      <div className='px-5 py-5 mb-20'>
        <h1 className='feather text-center font-bold text-2xl'>Which plant do you <i>plan</i> to grow ?</h1>
        <div className='grid grid-cols-2 gap-5'>
          {plants.map(plant => <Card plant={plant} setStep={setStep} />)}
        </div>
      </div>
      : 
      <div className='mb-20'>
        <Link to='/chat'>
          <div className='absolute right-[10px] top-[115px]'>
            <div className='bg-[#16A637] rounded-[50%] px-2 py-2'>
            <i className="fa-brands fa-rocketchat text-white"></i>
            </div>
          </div>
        </Link>
        <div className='bg-gray-200 h-full w-full py-5'>
          <h1 className='feather text-center text-[#16A637] font-bold text-4xl'>Day {day*10*day}</h1>
          {hurt && 
          <div className='absolute z-20 mt-[180px] ml-[150px]'>
              <Player
              autoplay
              src={`/plant_stages/hurt.json`}
              style={{ height: '150px', width: '150px' }}
            >
              <Controls />
            </Player>
          </div>
          }
          <div className='absolute ml-[50px]'>
            <Player
              autoplay
              src={`/plant_stages/day${day}.json`}
              style={{ height: '300px', width: '300px' }}
            >
              <Controls />
            </Player>
          </div>
          
          <div onClick={() => setHurt(true)}>
            <Player
              autoplay
              src={`/plant_stages/day0.json`}
              style={{ height: '300px', width: '300px' }}
            >
              <Controls />
            </Player>
          </div>
        </div>
        <div className='py-5 px-5'>   
          <p className='feather text-black font-bold text-xl'>To-do</p>
          {profile && toDo && toDo[day].map(task => <Row day={day} toDo={toDo} setToDo={setToDo} task={task} />)}
          <div className='flex justify-center my-5'>
            <button onClick={nextDay} className='feather rounded-[30px] bg-black text-white text-center font-semibold px-5 py-3'>Move to next day</button>
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default Game