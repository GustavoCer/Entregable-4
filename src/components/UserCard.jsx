
const UserCard = ({user}) => {
    return (
        <article>
            <h2>{`${user.first_name} $a{user.last_name}`}</h2>
            <hr />
            <ul>
                <li>
                    <span>Email</span>
                    <span>{user.email}</span>
                </li>
                <li>
                    <span>Birthday</span>
                    <span>{user.birthday}</span>
                </li>
            </ul>
            <hr />
            <footer>
                <button></button>
                <button></button>
                
            </footer>
        </article>
    )
}

export default UserCard