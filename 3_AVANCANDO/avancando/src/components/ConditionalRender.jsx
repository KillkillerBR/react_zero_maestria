import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(true);

    const [name,setName] = useState('carlos')

    return (
        <div>
            <h1>isso sera exibido?</h1>
            {x && <p>se x for true, sim!</p>}
            <h1>if ternario</h1>
            {name === 'joão' ? (
                <div>
                    <p>o nome é João</p>
                </ div >
        ) : (
            <div>
                <p> o nome não é joão</p>
            </div>
        )}
        <button onClick={() => setName('joão')}>clica aqui!</button>
                </div>
            )
}

            export default ConditionalRender