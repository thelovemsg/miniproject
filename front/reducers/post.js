import shortId from 'shortid';
import produces from 'immer';

export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname:'testnickname1'
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images:[{
            id: shortId.generate(),
            src: "http://ftps.ypage.kr/test32/data/file/yp_carsale/3537439288_iWtA1VgZ_8cf8e8e516955136d56933d22c616457cf714b99.png"
        },{
            id: shortId.generate(),
            src: "http://ftps.ypage.kr/test32/data/file/yp_carsale/3537439288_iWtA1VgZ_8cf8e8e516955136d56933d22c616457cf714b99.png"
        },{
            id: shortId.generate(),
            src: "http://ftps.ypage.kr/test32/data/file/yp_carsale/3537439288_iWtA1VgZ_8cf8e8e516955136d56933d22c616457cf714b99.png"
        }],
        Comments: [{
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname: "nero",
            },
            content: "테스트로 들어가는 콘텐츠 1"
        },{
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname: "theloveMSJ"
            },
            content:"테스트로 들어가는 콘텐츠 2"
        }]
    }],
    imagePaths: [],
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    addCommnetLoading: false,
    addCommnetDone: false,
    addCommnetError: null,
} 

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data
})

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data
})

const dummyPost = (data) => ({
    id: data.id,
    content: data.content,
    User: {
        id: 1,
        nickname: 'thelovedaejeon',
    },
    Images: [],
    Comments: [],
});

const dummyComment = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: 'thelovedaejeon',
    },
})

const reducer = (state = initialState, action) => {
    switch (action.type){ 
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            };
        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts: [dummyPost(action.data), ...state.mainPosts],
                addPostLoading: false,
                addPostDone: true,
            };
        case ADD_POST_FAILURE:
            return {
                ...state,
                addPostLoading: false,
                addPostError: action.data
            };
        case REMOVE_POST_REQUEST:
            return {
                ...state,
                removePostLoading: true,
                removePostDone: false,
                removePostError: null,
            };
        case REMOVE_POST_SUCCESS:
            return {
                ...state,
                mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
                removePostLoading: false,
                removePostDone: true,
            };
        case REMOVE_POST_FAILURE:
            return {
                ...state,
                removePostLoading: false,
                removePostError: action.data
            };
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading: true,
                addCommentDone: false,
                addCommentError: null,
            };
        case ADD_COMMENT_SUCCESS:{
            const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
            const post = {...state.mainPosts[postIndex]};
            post.Comments = [dummyComment(action.data.content), ...post.Comments];
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = post;
            return {
                ...state,
                mainPosts,
                addCommentLoading: false,
                addCommentDone: true,
            };
        }
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading: false,
                addCommentError: action.error
            };
        case ADD_POST_TO_ME: 
            return {
                ...state,
                me: {
                    ...state.me,
                    Posts: [{id: action.data}, ...state.me.Posts],
                },
            }
        case REMOVE_POST_OF_ME: 
            return {
                ...state,
                me: {
                    ...state.me,
                    Posts: state.me.Posts.filter((v) => v.id !== action.data ),
                },
            }
        default:
            return state;
    }
};

export default reducer;