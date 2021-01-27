import React, {useEffect, useState} from 'react'
import axios from "axios";

type posts = post[]

interface post {
    id: number,
    title: string
}

const Stats = () => {
    const [posts, setPosts] = useState<posts>([])

    useEffect( () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                setPosts(response.data)
            })
            .catch(error => console.log(error))
    },[])

    return (
        <div>
            <h1>Stats</h1>
            {
                posts.map( post => <li key={post.id}>{post.title}</li>)
            }
        </div>
    )
}

export default Stats