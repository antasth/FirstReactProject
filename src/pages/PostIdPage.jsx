import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService'
import { useFetching } from '../components/hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
   const params = useParams()
   const [post, setPost] = useState({})
   const [fetchPostsById, isLoading, error] = useFetching(async () => {
      const response = await PostService.getById(params.id)
      setPost(response.data)
   })
   useEffect(() => {
      fetchPostsById()
   }, [])

   return (
      <div>
         <h1>Вы открыли страницу поста ID={params.id}</h1>
         {isLoading
            ? <Loader />
            : <div>{post.id}. {post.title}<br/> {post.body} </div>
         }
      </div>
   );
};

export default PostIdPage;