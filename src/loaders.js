const URL = "https://rangers.onrender.com"

export const peopleLoader = async () => {
    const response = await fetch(URL + "/people")
    const people = await response.json()
    return people

}

export default URL