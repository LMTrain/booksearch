
import { useState, useEffect } from 'react'



const NoteForm = (props) => {
    console.log(props)
    
    const [ isInitialDataLoaded, setIsInitialDataLoaded] = useState(false)

    const defaultData = {
        name: '',       
    }
    const formData = props.initialData ? {...props.initialData} : defaultData

    const [form, setForm] = useState(formData)
    
    const handleChange = (event) => {
        const target = event.target
        const name = target.name

        setForm({
            ...form,
            [name]: target.value
        })
    }
   

    const submitForm = () => {
        props.handleFormSubmit({...form})        
    }

    return (
        <form>            
            <div className="form-group">
                <label htmlFor="name">Note</label>
                <input
                    onChange={handleChange}
                    value={form.name}
                    name="name"
                    type="text" 
                    className="form-control" 
                    id="name" 
                    aria-describedby="emailHelp" 
                    placeholder="Add Note" />
            </div>          
            <button               
                type="button"
                className="btn btn-primary">                   
                    { 'Create' }
                    
            </button>
            <button
                type="botton"
                className="btn btn-primary ml-2">
                    {props.cancelButton || 'Cancel'}
            </button>
        </form>
    )
}


export default NoteForm