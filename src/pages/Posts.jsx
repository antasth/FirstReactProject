import { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../components/hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../components/hooks/useFetching';
import { getPagesCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';
import '../styles/App.css'

function Posts() {
   const [posts, setPosts] = useState([])
   const [filter, setFilter] = useState({ sort: '', query: '' })
   const [modal, setModal] = useState(false)
   const [totalPages, setTotalPages] = useState(0)
   const [limit] = useState(10)
   const [page, setPage] = useState(1)
   const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
   const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
      const response = await PostService.getAll(limit, page)
      setPosts(response.data)
      const totalCount = (response.headers['x-total-count'])
      setTotalPages(getPagesCount(totalCount, limit))
   })

   useEffect(() => {
      fetchPosts()
   }, [page])

   const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
   }
   const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
   }

   const changePage = (page) => {
      setPage(page)
   }

   return (
      <div className='App'>
         <MyButton onClick={fetchPosts}>GET POSTS</MyButton>
         <MyButton onClick={() => setModal(true)}>
            Создать пост
         </MyButton>
         <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost} />
         </MyModal>
         <hr style={{ margin: '15px 0' }} />
         <PostFilter
            filter={filter}
            setFilter={setFilter}
         />
         <Pagination
            totalPages={totalPages}
            page={page}
            changePage={changePage}
         />
         {postError &&
            <h1>Произошла ошибка ${postError}</h1>
         }
         {isPostLoading
            ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
            : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов1'} />
         }
      </div>
   );
}

export default Posts;
