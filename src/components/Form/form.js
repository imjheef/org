import "./Form.css"

import TextField from "../TextField/TextField"
import OptionList from "../OptionList/OptionList"

const Form = (props) => {
    return <section className="Form">
        <form>
            <h2>
                Fill in form to add collaborators
            </h2>
            <TextField titulo="Name"
            placeholder={"Type your name"} />
			<TextField titulo="Position"    
            placeholder={"Type your position"} />
			<TextField titulo="Picture"     
                placeholder="Upload your picture" />
			<OptionList	/>
        </form>
    </section>
}


export default Form