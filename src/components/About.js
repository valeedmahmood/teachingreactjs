import {useEffect, useState} from 'react';

const api = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    // fetch(url)
    //     .then((res) => res.json())
    //     .then(response => console.log(response))
    //     .catch(err=>console.log('Something went wrong!!!'))
    try{
        const todos = await fetch(url)
        const data = await todos.json()
        return data
    }catch(err){
        return err
    }finally{
        console.log('Loading Complete')
    }
}

const About = ({name}) => {
    const [state, setstate] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        api()
        .then(res=>{
            console.log(res)
            setstate(res)
        })
        .catch(err=>console.log(err))
        .finally(()=>setloading(false))
    }, [])

    return (
        <div>
            <h1>Todo List</h1>
            <div className="row">
                {
                    !loading
                    ?
                    state &&
                    state.map((todo, index)=>(
                        <div className="col-md-3" key={index}>
                            <h6>{todo.title}</h6>
                            <small>{todo.completed ? 'Completed' : 'In Progress'}</small>
                        </div>
                    ))
                    : 
                    <h3>Loading....</h3>
                }
            </div>
        </div>
        
    )
}

export default About