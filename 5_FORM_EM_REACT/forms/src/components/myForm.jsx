import './myForm.css'
import { useState } from 'react'

function myForm({ user }) {
    // 6 - controled input

    {/* 3 - gerenciaento de dados */ }
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) => {
        setName(e.target.value)
    };


    const handleBio = (e) => {
        setBio(e.target.value)
    }

    {/* 5 - envio de form */ }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviando formulario")
        console.log(name)
        console.log(email)
        console.log(bio)
        //limpar formulario
        setName('')
        setEmail('')
        setBio('')
        setRole('')
    };

    return (
        <div>

            {/* 1 - criação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">nome:</label>
                    <input
                        type="text"
                        name='name'
                        placeholder='digite o seu nome'
                        onChange={handleName}
                        value={name}
                    />
                </div>
                {/* 2 - label envolvendo input */}
                <label >
                    <span>email:</span>
                    {/* 4 - simplificação de manipulação de state */}
                    <input
                        type="email"
                        name='email'
                        placeholder='digite o seu email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                {/* 8 - textarea */}
                <label>
                    <span>Bio</span>
                    <textarea
                        name="bio"
                        placeholder='descrição do usuario'
                        onChange={handleBio}
                        value={bio}
                    ></textarea>
                </label>
                {/* 9 - select */}
                <label>
                    <span>função</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">usuario</option>
                    <option value="editor">editor</option>
                    <option value="admin">administrador</option>
                    </select>
                </label>
                <input type="submit" value={"enviar"} />
            </form>
        </div>
    )
}

export default myForm