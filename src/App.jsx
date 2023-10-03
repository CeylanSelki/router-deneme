import { useEffect, useState } from "react";
import './app.css'

function App() {
    const [post, setPost] = useState ([]);

    useEffect(()=> {
        fetch ('https://jsonplaceholder.typicode.com/posts').then(x => x.json())
            .then(x => setPost(x));

    },[])
    console.log(post)

    return (
        <div className="post-container">
          {post.map(a => (
            <div className="post-item" key={a.id}>
              <div>{a.title}</div>
              <div>{a.body}</div>
            </div>
          ))}
        </div>
      );
  
    // return (
    //     <div>
    //         {post.map(a => (
    //             <div key={a.id}>
    //                 <div>{a.title}</div>
    //                 <div>{a.body}</div>
    //             </div>
    //         ))}
    //     </div>
    // )
}

export default App;