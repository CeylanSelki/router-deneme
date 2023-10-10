// import { useEffect, useState } from "react";
// import './app.css'
// // import data from '../data/data.json'; 



// function App() {
//     const [post, setPost] = useState ([]);

//     useEffect(()=> {
//         fetch ('https://jsonplaceholder.typicode.com/posts').then(x => x.json())
//             .then(x => setPost(x));

//     },[])
//     console.log(post)

//     return (
//         <div className="post-container">
//           {post.map(a => (
//             <div className="post-item" key={a.id}>
//               <div>{a.title}</div>
//               <div>{a.body}</div>
//             </div>
//           ))}
//         </div>
//       );
  
//     // return (
//     //     <div>
//     //         {post.map(a => (
//     //             <div key={a.id}>
//     //                 <div>{a.title}</div>
//     //                 <div>{a.body}</div>
//     //             </div>
//     //         ))}
//     //     </div>
//     // )
// }

// export default App;

import React, { useEffect, useState } from "react";
import './app.css';

function App() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Veri alınamadı');
                }
                return response.json();
            })
            .then(data => setPosts(data));
    }, []);


    return (
        <div className="post-container">
            <div className="post-header">
                <img src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg" alt="" />
            </div>
            {posts.map((post) => (
                <div className="post-item" key={post.id}>
                    { (
                        <>
                            <div className="post-title">{post.title}</div>
                            <div className="post-body">{post.body}</div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default App;
