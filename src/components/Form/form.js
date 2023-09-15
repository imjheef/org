import "./Form.css"
import TextField from "../TextField/TextField"
const Form = (props) => {
    return <section className="Form">
        <form>
            <h1>
                Fill in form to add collaborators
            </h1>
            <TextField titulo="Name"
            placeholder={"Type your name"} />
			<TextField titulo="Position"    
            placeholder={"Type your position"} />
			<TextField titulo="Picture"     
            placeholder="Upload your picture" />
        </form>
    </section>
}


export default Form