const TemplaceExpressions = () => {

    const name = "matheus";
    const data = {
        age: 31,
        job: "programador",
    };

    return (
        <div>
        <h1>olá {name}, tudo bem?</h1>
        <p>voce atua como {data.job}</p>
        <p>{4 + 4}</p>
        </div>
    )
}

export default TemplaceExpressions;