import './SearchForm.css'

import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

const SearchForm = () => {
const navigate = useNavigate()
const [querry, setQuerry] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()

    navigate("/search?q=" + querry)
}

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuerry(e.target.value)}/>
        <input type="submit" value='buscar' />
    </form>
  )
}

export default SearchForm