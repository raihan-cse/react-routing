import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PostDetails = (props) => {
    const [post, setPost] = useState({});
    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/'+props.match.params.id)
       .then(res => res.json())
       .then(data => setPost(data));
        // fetchData();  
   }, [props.match.params.id]);

//    const fetchData = async () => {
//        await fetch('https://jsonplaceholder.typicode.com/posts/'+props.match.params.id)
//        .then(res => res.json())
//        .then(data => setPost(data));
//    };
    return (
        <Container>
            <Row>
                <Col>
                    <div>
                    {Object.keys(post).length > 0 && (
                            <>
                                <h1>Title: {post.title}</h1>
                                <p>Body: {post.body}</p>
                            </>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default PostDetails;