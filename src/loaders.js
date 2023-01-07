const URL = "https://rangers.onrender.com"

export const peopleLoader = async () => {
    const response = await fetch(URL + "/people")
    const people = await response.json()
    return people

}

export default URL


export const personLoader = async ({params}) => {
    const response = await fetch(URL + "/people/" + params.id)
    const person = await response.json()
    return person
}