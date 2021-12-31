import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/middleComponent/Post/PostCard";
import PostForm from "../components/middleComponent/Post/PostForm";
import { LOAD_POST_REQUEST } from "../reducers/post";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";

const Home = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
    const { pageable, mainPosts, isLastPage, loadPostLoading } = useSelector((state) => state.post);
    
    useEffect(() => {
        dispatch({
            type: LOAD_MY_INFO_REQUEST
        });
        dispatch({
            type: LOAD_POST_REQUEST,
            data: {
                pageNumber : pageable.pageNumber,
                pageSize : pageable.pageSize,
            }
        });
    }, []);

    useEffect(() => {
        function onScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300){
                if (!isLastPage && !loadPostLoading ) {
                    dispatch({
                        type: LOAD_POST_REQUEST,
                        data: {
                            pageNumber : pageable.pageNumber + 1,
                            pageSize : pageable.pageSize,
                        }
                    }); 
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [isLastPage, pageable, loadPostLoading]);
    return (
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post) => <PostCard key={post.id} post={post}/>)}
        </AppLayout>
    );
}

export default Home; 