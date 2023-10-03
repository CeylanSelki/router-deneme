import { useEffect, useState } from "react";

function App() {
    const [post, setPost] = useState ([]);

    useEffect(()=> {
        fetch ('https://jsonplaceholder.typicode.com/posts').then(x => x.json())
            .then(x => setPost(x));

    },[])
    console.log(post)
  
    return (
        <div>
            {post.map(a => (
                <div key={a.id}>
                    <div>{a.title}</div>
                    <div>{a.body}</div>
                </div>
            ))}
        </div>
    )
}

export default App;