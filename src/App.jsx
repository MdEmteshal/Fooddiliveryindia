import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DashboardFood } from './FoodProjects/components/dashboard'
import { Provider } from 'react-redux'
import {store} from '../src/FoodProjects/foodstore/createStore'
import { dataContext, UserContextapi } from './FoodProjects/components/userContextapi'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
      <UserContextapi >
    <DashboardFood/>
    </UserContextapi>
    </Provider>
    </>
  )
}

export default App
