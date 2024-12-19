

const UserDetailsItems = ({nome, idade, profissao}) => {
  return (
    <>
        <h2>{nome}</h2>
        <ul>
            <li>idade: {idade}</li>
            <li>profissão: {profissao}</li>
        </ul>
        {idade >= 18 ? (<p>Esta pessoa pode tirar carteira</p>) : (<p>Esta pessoa não pode tirar carteira</p>)}
    </>
  )
}

export default UserDetailsItems