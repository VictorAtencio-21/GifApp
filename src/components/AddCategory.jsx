import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({target}) => {
        setInputValue( target.value )
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        const Input = inputValue.trim()

        if (Input.length <= 1) return;

        onNewCategory( Input )
        setInputValue('');
    }

    return (

        <form onSubmit={ onSubmit }>
            <input 
            type="text"
            name="category"
            placeholder='Search'
            value={ inputValue }
            onChange={ onInputChange }
            />
        </form>

    )
}
