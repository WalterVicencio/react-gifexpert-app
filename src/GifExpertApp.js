import React,{useState} from 'react'
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp= ()=>{

    //const categorias=['Dragon Ball','Naruto','Triple H'];

    const [categorias, setcategorias] = useState(['Dragon Ball'])


    return(
        <>
        <h1>GifExpertApp</h1>
        <AddCategory setcategorias={setcategorias} />
        <hr />
        {
            categorias.map(category=>(
                    <GifGrid 
                    key={category}
                    category={category}/>
                    ))
        }
        </>
    )
}
