import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './Hook/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {

  const [updateInfo, setUpdateInfo] = useState()

  const baseUrl = 'https://users-crud.academlo.tech'

  const [users, getAllUsers, createNewUser, deleteUserById, updateUserById] = useFetch(baseUrl)

  useEffect(() => {
    getAllUsers('/users')
  }, [])

  console.log(users)

  return (
    <div>
      <h1>Users</h1>
      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        />
        <div>
          {
            users?.map(user => (
              <UserCard
                key={user.id}
                user={user}
                deleteUserById={deleteUserById}
                setUpdateInfo={setUpdateInfo}
                />
            ))
          }
        </div>
    </div>
  )
}

export default App
