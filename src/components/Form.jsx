import { Form, Row, Col, Modal, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios'

const PostForm = (props)=>{


    const [post,setPost] =useState({
        id : props.editModal?props.post?.id:props.postid,   
        author : props.editModal?props.post?.author:'',
        title : props.editModal?props.post?.title:''
    })

     const changeInputHandler = (e,field)=>{
        switch(field){
            case 'title'   : setPost({...post, title : e.target.value});break;
            case 'author' : setPost({...post, author : e.target.value});break;
        }
    }

    const submitButtonHandler = (event)=>{
        event.preventDefault();
 
        if(props.editModal){
             axios.put(`http://localhost:3001/posts/${props.post.id}`,post)
            .then(res=>props.onHide())
        }
        else{
            axios.post('http://localhost:3001/posts',post)
            .then(res=>props.onHide())
        }
       
    }
    
   
    return(
        <Form className={!props.editModal?'mt-3 border p-2':null}>
            <Form.Group as={Row} className='mb-2'>
                <Form.Label column sm='2'>
                    <h6>Title</h6>
                </Form.Label>
                <Col sm='10' md='50'>
                        <Form.Control  className='w-100' value={post.title} onChange={(event)=>changeInputHandler(event,'title')}></Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-1'>
                <Form.Label column sm='2' md='50'>
                    <h6>Author</h6>
                </Form.Label>
                <Col sm='10'>
                        <Form.Control  className='w-100'  value={post.author} onChange={(event)=>changeInputHandler(event,'author')}></Form.Control>
                </Col>
            </Form.Group>
            <Form.Group className='text-end mt-3'>
                <Button className='mx-auto' variant={props.editModal?'primary':'dark'} type='submit' onClick={submitButtonHandler}>Submit</Button>
            </Form.Group>
        </Form>
    )

}

export default PostForm;