import axios from "axios";

const url = "https://jsonplaceholder.typicode.com";

async function getData(userID) {
    const { data: users } = await axios.get(`${url}/users/${userID}`);
    const { data: posts } = await axios.get(`${url}/posts?userID=${userID}`);

    console.log({ users: users, posts: posts });
};

export default getData;