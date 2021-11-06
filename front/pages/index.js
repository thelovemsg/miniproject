import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/middleComponent/Post/PostCard";
import PostForm from "../components/middleComponent/Post/PostForm";

const Home = () => {
    const { me } = useSelector((state) => state.user);
    const { mainPosts } = useSelector((state) => state.post);
    return (
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post, index) => <PostCard key={post.id} post={post}/>)}
        </AppLayout>
    );
}

export default Home; 