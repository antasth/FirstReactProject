import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService'
import { useFetching } from '../components/hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
   const params = useParams()
   const [post, setPost] = useState({})
   const [comments, setComments] = useState([])
   const [fetchPostsById, isLoading, error] = useFetching(async () => {
      const response = await PostService.getById(params.id)
      setPost(response.data)
   })
   const [fetchComments, isComLoading, comError] = useFetching(async () => {
      const response = await PostService.getComment(params.id)
      setComments(response.data)
      console.log(response.data);
   })
   
   useEffect(() => {
      fetchPostsById()
      fetchComments()
   }, [])

   return (
      <div>
         <h1>Вы открыли страницу поста ID={params.id}</h1>
         {isLoading
            ? <Loader />
            : <div>{post.id}. {post.title}<br/> {post.body} </div>
         }
         <h1>Комментарии</h1>
         {isComLoading
            ? <Loader />
            : <div>
               {comments.map(comment => 
                  <div style={{marginTop: '15px'}} key={comment.id}>         
                     <h5>{comment.email}</h5>
                     <div>{comment.body}</div>
                  </div>
               )}
               </div>
         }
      </div>
   );
};

export default PostIdPage;

