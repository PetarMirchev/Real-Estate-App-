import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'dccfa4e4d1msh93076bc688de8edp18f9aejsnff5435c2f160'
        }
    });

    return data;
}