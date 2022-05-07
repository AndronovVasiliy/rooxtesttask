import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getUserData } from '../../store/reducers/ActionCreateUsers'
import Preloader from '../Preloader/Preloader'
import UserCard from './UserCard'
import './Users.css'

const Users = () => {

  const dispatch = useAppDispatch()
  const { users, isLoading } = useAppSelector(state => state.user)

  useEffect(() => {
    dispatch(getUserData())
  }, [])

  return (
    <div className='users'>
      <h1 className='titleUsers'>Список пользователей</h1>
      {isLoading ? <Preloader /> : users.map(i => <UserCard key = {i.id} {...i}/>)}      
      {!isLoading && <span className='numberUser'>Найдено 10 пользователей</span>}
    </div>
  )
}

export default Users