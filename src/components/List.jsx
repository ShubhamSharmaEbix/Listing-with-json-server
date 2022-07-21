import { Button } from 'react-bootstrap'

const List = ({post,showEditModal,showDeleteModal, serialNo})=>{
    

    return(
        <tr>
            <td className='text-center'>{serialNo+1}</td>
            <td className='text-center'>{post.author}</td>
            <td className='text-center'>{post.title}</td>
            <td className='d-flex align-items-center justify-content-around' >
                <Button className='w-25' onClick={showEditModal} variant='outline-primary'>Edit</Button>
                <Button className='w-25' onClick={showDeleteModal} variant='outline-danger'>Delete</Button>
            </td>
        </tr>
    )
}

export default List;