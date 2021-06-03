import React, {useEffect, useState, useRef} from 'react'

const Contact = () => {

    // element 

    const age = useRef(null);

    useEffect(() => {
        
    }, [])

    const [state, setstate] = useState({
        name:'',
        age:'',
        designation:''
    })

    const [checker, setchecker] = useState(false)

    const handleChange = (e) => {
        setstate({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setchecker(true)
    }

    return (
        <div>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" required name="name" value={state.name} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Designation</label>
                    <input type="text" required ref={age} name="age" value={state.age} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" required name="designation" value={state.designation}   onChange={handleChange}/>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <div className={'mt-4'}>
                {
                    checker &&
                    <ul>
                        <li>{state.name}</li>
                        <li>{state.age}</li>
                        <li>{state.designation}</li>
                    </ul>
                }
            </div>
        </div>
        
    )
}

export default Contact