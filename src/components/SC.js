import React from 'react'

import { Button } from './styles/stylesc'

const SC = () => {
    return (
        <>
            <Button isChecked onClick={()=>alert('Clicked')}>Click Me</Button>
        </>
    )
}

export default SC