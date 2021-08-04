import React from 'react'

interface TodoFormPorps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormPorps> = props => {
    // const [title, setTitle] = React.useState<string>('')
    const ref = React.useRef<HTMLInputElement>(null)

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => { 
    //     setTitle(event.target.value)
    // }

    const keyPressHandler = (event: React.KeyboardEvent) => { //catching parameters passing through the input by pressing ENTER
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
            // console.log(title)
            // setTitle('') //Clearing the input field after pressing ENTER
        }
    }

    return (
        <div 
        className='input-field mt2'>
            <input 
            // value={title} 
            ref={ref}
            type='text' 
            id ='title' 
            placeholder='Enter the name of the task'
            onKeyPress={keyPressHandler} 
            // onChange={changeHandler} 
            />
            <label htmlFor='title' className='active'>Enter the name of the task</label>
        </div>
    )
}