import "./TextField.css"

const TextField = (props) => {
    console.log("Datos: ",props.titulo)
    return <div 
    className="TextField">
        <label>{props.titulo}</label>
        <input placeholder={props.placeholder} />
        
    </div>
}

export default TextField 