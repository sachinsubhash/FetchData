import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

export const fetchData = async() => {
    try {
        const { data: {userId, id, title, body} } = await axios.get(url);

        const modifiedData = { userId, id, title, body };
        return modifiedData;
    }catch(error) {
        
    }
}