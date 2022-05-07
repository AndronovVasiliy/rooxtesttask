import { Link } from 'react-router-dom'
import { User } from '../../store/reducers/userReducer'
import './UserCard.css'

const UserCard = (props: User) => {
  return (
    <div className='userCard'>
        <div className='description'>
            <span className='infoFieldUserCard'>ФИО:<span className='dataUserUserCard'>{props.name}</span></span>
            <span className='infoFieldUserCard'>Город:<span className='dataUserUserCard'>{props.address.city}</span></span><span></span>
            <span className='infoFieldUserCard'>Компания:<span className='dataUserUserCard'>{props.company.name}</span></span><span></span>
        </div>
        <div className='details'>
            <Link className='linkDetails' to = {`/profile/${props.id}`}>Подробнее</Link>
        </div>
    </div>
  )
}

export default UserCard