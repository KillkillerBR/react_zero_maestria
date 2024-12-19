import { useState } from "react"

const ListRender = () => {

    const[list] = useState(['Matheus','Pedro','Josias'])

    const [users, setUsers] = useState([
        {id: 1, name: 'matheus', age: 31},
        {id: 2, name: 'joao', age: 32},
        {id: 3, name: 'jorge', age: 23},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((item, i) => (
                <li key={item.id}>{item.name} - {item.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender