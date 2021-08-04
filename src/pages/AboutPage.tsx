import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage = () => {
    const history = useHistory()
    return(
        <>
        <h1>Information page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ab veniam quo nam consequatur cum autem? Facere quasi ex in voluptatem sequi quibusdam, natus aut deleniti officiis? Nulla, minima?</p>
        <button className='btn' onClick={()=> history.push('/')}>Back to tasks</button>
        </>
    )
}