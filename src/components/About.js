import {useEffect} from 'react';

const About = ({name}) => {
    
    useEffect(() => {
        console.log('About')
    }, [])

    return (
        <div>
            <h1>About Component</h1>
        </div>
    )
}

export default About