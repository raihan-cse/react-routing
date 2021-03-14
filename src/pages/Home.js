import React, {useState, useEffect } from 'react';

const Home = () => { 
    const[post, setPost] = useState({});
    console.log(post);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(err => console.log(err))
    },[])

        return (
            <div>
                {Object.keys(post).length > 0 && (
                    <>
                    <h1>Title: {post.title}</h1>
                    <p>Body: {post.body}</p>
                    </>
                )}
            </div>
        );
};
 
export default Home;