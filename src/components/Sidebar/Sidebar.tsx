import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { usersReducer } from '../../store/reducers/userReducer'
import './Sidebar.css'

const Sidebar = () => {

    const users = useAppSelector(state => [...state.user.users])
    const { sortUsers } = usersReducer.actions
    const dispatch = useAppDispatch()

    const sortArr = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (e.currentTarget.value === 'city') {
            dispatch(sortUsers(users.sort((a, b) => a.address.city.localeCompare(b.address.city))))
        }
        if (e.currentTarget.value === 'company') {
            dispatch(sortUsers(users.sort((a, b) => a.company.name.localeCompare(b.company.name))))
        }
    }

    return (
        <div className='sidebarComponent'>
            <h2 className='titleSidebar'>Сортировка</h2>
            <button onClick={(e) => sortArr(e)} className='buttonSort' value={'city'}>по городу</button>
            <button onClick={(e) => sortArr(e)} className='buttonSort' value={'company'}>по компании</button>
        </div>
    )
}

export default Sidebar