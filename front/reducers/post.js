export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname:'testnickname1'
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images:[{
            src: "http://ftps.ypage.kr/test32/data/file/yp_carsale/3537439288_iWtA1VgZ_8cf8e8e516955136d56933d22c616457cf714b99.png"
        },{
            src: "http://ftps.ypage.kr/test32/data/file/yp_carsale/3537439288_iWtA1VgZ_8cf8e8e516955136d56933d22c616457cf714b99.png"
        },{
            src: "http://ftps.ypage.kr/test32/data/file/yp_carsale/3537439288_iWtA1VgZ_8cf8e8e516955136d56933d22c616457cf714b99.png"
        }],
        Comments: [{
            User: {
                nickname: "nero",
            },
            content: "테스트로 들어가는 콘텐츠 1"
        },{
            User: {
                nickname: "theloveMSJ"
            },
            content:"테스트로 들어가는 콘텐츠 2"
        }]
    }],
    imagePaths: [],
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
} 

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data
})

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data
})

const dummyPost = {
    id: 2,
    content: '더미네이터',
    User: {
        id: 1,
        nickname: 'thelovedaejeon',
    },
    Images: [],
    Comments: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type){ 
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            }
        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                addPostLoading: false,
                addPostDone: true,
            }
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading: false,
                addPostError: action.error
            }
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading: true,
                addCommentDone: false,
                addCommentError: null,
            }
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                addCommentLoading: false,
                addCommentDone: true,
            }
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading: false,
                addCommentError: action.error
            }
        default:
            return state;
    }
};

export default reducer;