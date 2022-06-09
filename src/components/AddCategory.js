import { useState } from "react";
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategorias }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSumit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 0 ) {
            setCategorias( cats => [ inputValue, ...cats]);
        }

        setInputValue('');

        //console.log('Submit hecho')
    }

    return (
        <form onSubmit={handleSumit}>
            <input 
                type="text"
                value={ inputValue }
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}