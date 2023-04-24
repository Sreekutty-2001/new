import defaultAxios from 'axios';
const baseURL = "https://atpro.in/api/";
// const baseURL = "http://127.0.0.1:8000/api/";
const axios = defaultAxios.create({
    baseURL: baseURL,
    headers: {'Content-Type': 'application/json'}
});

// Get All Todos
export const get = async (url) => {
    try {
        const todos = await axios.get(url)
        return todos.data;
    } catch (err) {
        return console.error(err)
    }
}

// Create New Todo
export const post = async (url, data, id = undefined) => {

    try {
        if (id) {
            const todo = await axios.put(`${url}/${id}`, data);

            return todo.data;
        } else {
            const todo = await axios.post(url, data);
            return todo.data;
        }
    } catch (err) {
        throw err;
    }
}
//patch
export const patch = async (url, data, id = undefined) => {
    try {
        const todo = await axios.patch(`${url}/${id}`, data);
        return todo.data;
    } catch (err) {
        return console.error(err)
    }
}


// Delete existed todo
export const del = async (url, id) => {
    try {
        await axios.delete(`${url}/${id}`)
        return id
    } catch (err) {
        return console.error(err)
    }
}