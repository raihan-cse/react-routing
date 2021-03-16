import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
         fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
            .catch(err => console.log(err))
    }, [])
    

    

    return (
        <Container>
            <Row>
                {/* <Col xs={12} sm={6} md={4} lg={3} xl={2}>
                    <div className="content-wrapper">
                        {Object.keys(post).length > 0 && (
                            <>
                                <h1>Title: {post.title}</h1>
                                <p>Body: {post.body}</p>
                            </>
                        )}
                    </div>
                </Col> */}
                {post.map(record=>(
                    <Col xs={12} sm={6} md={4} lg={3} xl={2}>
                        <div className="content-wrapper" key={record.id}>
                            <Link to={'/posts/'+record.id}>
                            <h2>{record.title}</h2>
                            <p>{record.body}</p>
                            </Link>
                        </div>
                    </Col>
                ))}
                <Col xs={12} sm={6} md={4} lg={3} xl={2}>3</Col>
                <Col xs={12} sm={6} md={4} lg={3} xl={2}>4</Col>
                <Col xs={12} sm={6} md={4} lg={3} xl={2}>5</Col>
                <Col xs={12} sm={6} md={4} lg={3} xl={2}>6</Col>
            </Row>
        </Container>
    );
};

export default Home;