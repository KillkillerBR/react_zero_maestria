const Events = () => {

    const handleMyEvent = (e)=> {
        console.log(e)
        
        console.log("ativou o evento")
    }

    const renderSomething = (x) => {

        if (x) {
            return <h1>renderizando isso</h1>
        } else {
            return <h1>tambem posso renderizar isso</h1>
        }

    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>clique aqui!</button>
            </div>
            <div>
                <button onClick = {() => console.log(clicou)}>Clique aqui tambem!</button>
                <button onClick = {() => {
                    if (true) {
                        console.log("isto nao devia existir")
                    }
                }}>Clique aqui, por favor</button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    )
}

export default Events;