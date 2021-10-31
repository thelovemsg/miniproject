import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/middleComponent/PostCard";
import PostForm from "../components/middleComponent/PostForm";

const Home = () => {
    const { isLoggedIn } = useSelector((state) => state.user);
    const { mainPosts } = useSelector((state) => state.post);
    return (
        <AppLayout>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((post, index) => <PostCard key={post.id} post={post}/>)}
        </AppLayout>
    );
}

export default Home; 