import axios from "axios";
import { use } from "express/lib/router";

//Usamos las interfaces para definir los tipos de un objeto
interface Post {
    id: number;
    title: string;
    userId: number;
}

const url = 'https://jsonplaceholder.typicode.com/posts/1';
axios.get(url).then(response => {
    const post = response.data as Post; // Which interface will we use to interpret the data? 
    const {id, title, userId} = post;
    logPost(id, title, userId);
})

const logPost = (id: number, title: string, userId: number) => {
    console.log(`The post with id: ${id} has title: ${title} and author: ${userId}`)
}