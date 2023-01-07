import {Form, Link, useLoaderData} from "react-router-dom"

export default function Index(props) {
    const people = useLoaderData()
  
    return (
        <div>
          <h2>Create a Ranger</h2>
          <Form action="/create" method="post">
            <input type="input" name="name" placeholder="Ranger Name" />
            <input type="input" name="image" placeholder="Ranger Picture" />
            <input type="input" name="title" placeholder="Ranger Title" />
            <input type="submit" value="create person" />
          </Form>
    
          <h2>People</h2>
          {people.map(person => (
            <div key={person._id} className="person">
              <Link to={`/${person._id}`}>
                <h1>{person.name}</h1>
              </Link>
              <img src={person.image} alt={person.name} />
              <h3>{person.title}</h3>
            </div>
          ))}
        </div>
      )
    }