import './Preloader.css'

const Preloader = () => {

    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <>
            {arr.map(i => <UserCard />)}
        </>
    )
}

export default Preloader

const UserCard = () => {
    return (
        <div className='userCardPreloader'>
            <div>Loading...</div>
        </div>
    )
}
