import UserDetailsItems from "./UserDetailsItems"

const UserDetails = ({pessoas}) => {
  return (
    <div>
        {pessoas.map((pessoa) => (
            <UserDetailsItems
            nome = {pessoa.nome}
            idade = {pessoa.idade}
            profissao = {pessoa.profissao}
            />
        ))}
    </div>
  )
}

export default UserDetails