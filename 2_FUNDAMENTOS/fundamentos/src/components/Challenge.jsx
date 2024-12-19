

const Challenge = () => {
    var x = 2;
    var y = 5;
    
    return  (
        <div>
            <h1>primeiro valor: {x}</h1>
            <h1>segundo valor: {y}</h1>
            <button onClick={() => console.log(x+y)}>Somar!</button>
        </div>
    )
}

export default Challenge