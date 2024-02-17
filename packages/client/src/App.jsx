import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MarketPlace from './pages/MarketPlace'
import Game from './pages/Game'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Forums from './pages/Forums'
import Forum from './pages/Forum'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import News from './pages/News'
import NewsArticle from './pages/NewsArticle'
import Orders from './pages/Orders'
import Home from './pages/Home'
import Steps from './pages/Steps'
import TopNav from './components/Home/TopNav'
import BotNav from './components/Home/BotNav'
import CreateForum from './pages/CreateForum'
import Chat from './pages/Chat'
import Leaderboard from './pages/Leaderboard'


function App() {

  return (
    <>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/game" element={<Game />} />
          <Route path="*">"Not Found"</Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/forum/:id" element={<Forum />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsArticle />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/create" element={<CreateForum />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        <BotNav />
      </BrowserRouter>
    </>
  )
}

export default App
