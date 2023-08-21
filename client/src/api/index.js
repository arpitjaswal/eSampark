import axios from "axios";


const url = "https://localhost:3455/posts"

export const fetchPosts = ()=>axios.get(url);
