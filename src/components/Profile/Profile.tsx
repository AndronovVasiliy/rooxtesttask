import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Profile.css'
import ProfileFormData from './ProfileFormData'

const Profile = () => {

    const [editMode, seteditMode] = useState(true)
    let { id } = useParams<{ id: string }>()

    return (
        <div className='profile'>
            <div className='headerProfile'><h1 className='headerTitile'>Профиль пользователя</h1><button onClick={() => seteditMode(false)} className='editProfileButton'>Редактировать</button></div>
            {id ? <ProfileFormData seteditMode = {seteditMode} editMode={editMode} id={id} /> : <div>Пользователь не найден</div>}            
        </div>
    )
}

export default Profile