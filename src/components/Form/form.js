import "./Form.css"
import TextField from "../TextField/TextField"

const Form = () => {
    return <section className="Form">
        <form>
            <h1>
                Fill in form to add collaborators
            </h1>
			<TextField />
			<TextField />
			<TextField />
        </form>
    </section>
}


export default Form