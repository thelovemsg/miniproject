import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/middleComponent/Post/PostCard";
import PostForm from "../components/middleComponent/Post/PostForm";
import { FixedSizeList as List } from 'react-window';
import { LOAD_POST_REQUEST } from "../reducers/post";

const Home = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
    const { mainPosts, hasMorePost, loadPostLoading } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch({
            type: LOAD_POST_REQUEST,
        });
    }, [hasMorePost, loadPostLoading]);

    useEffect(() => {
        function onScroll() {
            console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight -  300){
                if (hasMorePost && !loadPostLoading) {
                    dispatch({
                        type: LOAD_POST_REQUEST,
                    }); 
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);

    return (
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post) => <PostCard key={post.id} post={post}/>)}
        </AppLayout>
    );
}

export default Home; 