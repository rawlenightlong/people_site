import { Form, useLoaderData } from "react-router-dom"

export default function Show(props){

    const person = useLoaderData()

    return(<>
    
    <div className="person">

        <h1>{person.name}</h1>
        <h2>{person.title}</h2>
        <img src={person.image} alt={person.name}/>

        <h2>Update {person.name}</h2>
        <Form action={`/update/${person._id}`} method="post">
            <input type="input" name="name" placeholder={`Ranger's name`} />
            <input type="input" name="image" placeholder="Ranger's image"/>
            <input type="input" name="title" placeholder="Ranger's title"/>
            <input type="submit" value={`Update ${person.name}`}/>
        </Form>
        <h2>Update {person.name}</h2>
        <Form action={`/delete/${person._id}`} method="post">
            <input type="submit" value={`Delete ${person.name}`}/>
        </Form>

    </div>
    
    </>)
}