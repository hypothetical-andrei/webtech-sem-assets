import { useEffect, useState } from 'react'
import User from './User'
import UserDetails from './UserDetails'
import UserForm from './UserForm'
import './UserList.css'

const SERVER = 'http://localhost:8080'

function UserList (props) {
  const [users, setUsers] = useState([])
  const [selected, setSelected] = useState(0)

  const getUsers = async () => {
    const response = await fetch(`${SERVER}/users`)
    const data = await response.json()
    setUsers(data)
  }

  const addUser = async (user) => {
    await fetch(`${SERVER}/users`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='user-list'>
      {
        selected !== 0
          ? (
            <UserDetails onCancel={() => setSelected(0)} item={users.find(e => e.id === selected)} />
            )
          : (
            <>
              {
                users.map(e => <User key={e.id} item={e} onSelect={() => setSelected(e.id)} onCancel={() => setSelected(0)} />)
              }
              <UserForm onAdd={addUser} />
            </>
            )
      }
    </div>
  )
}

export default UserList
