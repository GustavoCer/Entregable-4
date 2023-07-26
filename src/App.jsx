import { useEffect } from 'react'
import './App.css'
import useFetch from './Hook/useFetch'
import UserCard from './components/UserCard'

function App() {

  const baseUrl = 'https://users-crud.academlo.tech'

  const [users, getAllUsers, createNewUser, deleteUserById, updateUserById] = useFetch(baseUrl)

  useEffect(() => {
    getAllUsers('/users')
  }, [])

  console.log(users)

  return (
      <div>
      <h1>Holanda</h1>
      <div>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              />
          ))
        }
      </div>
      </div>
  )
}

export default App
