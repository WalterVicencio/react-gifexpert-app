import React,{useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setcategorias}) => {

    const [inputValue, setinputValue] = useState('Escriba Aquí');

    const [labelValue, setlabelValue] = useState('Mínimo 8 letras')

    const handleInputChange =(e)=>{
        setinputValue(e.target.value);
        if(inputValue.length>3){
            setlabelValue('Aceptado');
        }else{
            setlabelValue('Rechazado');
        }
    }

    const handleInputSubmit=(e)=>{
        e.preventDefault();

        if( inputValue.trim().length>2){
            setcategorias(cats=>[inputValue,...cats]);
            setinputValue('');
        }
        
    }

    return (
        <form onSubmit={handleInputSubmit}>
            <input 
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            />
            <label>{labelValue}</label>
        </form>
    )
}

AddCategory.propTypes = {
    setcategorias: PropTypes.func.isRequired
}
