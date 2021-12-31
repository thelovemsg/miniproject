import shortId from 'shortid';
import produces, { produce } from 'immer';
import faker from 'faker';
export const initialState = {
    pageable:{
        offset: 0,
        pageNumber: -1,
        pageSize: 10,
        paged: true,
        unpaged: false,
    },
    isPageSetting: false,
    totalElements: 0,
    totalPages: 0,
    isLastPage: false,
    isFirstPage: true,
    mainPosts: [],
    imagePaths: [],
    loadPostLoading: false,
    loadPostDone: false,
    loadPostError: null,
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
} 

export const generateDummyPost = (number) => Array(number).fill().map(() => ({
    id: shortId.generate(),
    User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
    },
    content:faker.lorem.paragraph(),
    Images: [{ 
        src: faker.image.imageUrl(),
    }],
    Comments: [{
        User: {
            id: shortId.generate(),
            nickname: faker.name.findName()
        },
        content: faker.lorem.sentence(),
    }],
}));

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

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

// const dummyPost = (data) => ({
//     id: data.id,
//     content: data.content,
//     User: {
//         id: 1,
//         nickname: 'thelovedaejeon',
//     },
//     Images: [],
//     Comments: [],
// });

// const dummyComment = (data) => ({
//     id: shortId.generate(),
//     content: data,
//     User: {
//         id: 1,
//         nickname: 'thelovedaejeon',
//     },
// })

//이전 상태를 action을 통해 다음 상태로 만들어 내는 함수 (불변성을 지키면서)
const reducer = (state = initialState, action) => {
    return produce (state, (draft) => {
        switch (action.type){ 
            case LOAD_POST_REQUEST:
                draft.loadPostLoading = true;
                draft.loadPostDone= false;
                draft.loadPostError= null;
                break;
            case LOAD_POST_SUCCESS:
                console.log("action.data.content :: ", action.data.content);
                draft.loadPostLoading = false;
                draft.loadPostDone= true;
                draft.mainPosts = draft.mainPosts.concat(action.data.content);
                draft.pageable.pageNumber = action.data.pageable.pageNumber;
                draft.pageable.pageSize = action.data.pageable.pageSize;
                draft.pageable.paged = action.data.pageable.paged;
                draft.pageable.offset = action.data.pageable.offset;
                draft.pageable.paged = action.data.pageable.paged;
                draft.pageable.unpaged = action.data.pageable.unpaged;
                draft.totalPages = action.data.totalPages;
                draft.totalElements = action.data.totalElements;
                draft.isLastPage = action.data.last;
                break;
            case LOAD_POST_FAILURE:
                draft.loadPostLoading = false;
                draft.loadPostError = action.error;
                break;
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone= false;
                draft.addPostError= null;
                break;
            case ADD_POST_SUCCESS:
                draft.addPostLoading = false;
                draft.addPostDone= true;
                draft.mainPosts.unshift(action.data);
                break;
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostError = action.error;
                break;
            case REMOVE_POST_REQUEST:
                draft.removePostLoading = true;
                draft.removePostDone = false;
                draft.removePostError = null;
                break;
            case REMOVE_POST_SUCCESS:
                draft.removePostLoading = false;
                draft.removePostDone = true;
                draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
                break;
            case REMOVE_POST_FAILURE:
                draft.removePostLoading = false;
                draft.removePostError = action.error;
                break;
            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
            case ADD_COMMENT_SUCCESS:{
                console.log("Addcomment :: ", action.data);
                const post = draft.mainPosts.find((v) => v.id === action.data.postId);
                post.commentList = {};
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                break;
                // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
                // const post = { ...state.mainPosts[postIndex] };
                // post.Comments = [dummyComment(action.data.content), ...post.Comments];
                // const mainPosts = [...state.mainPosts];
                // mainPosts[postIndex] = post;
                // return {
                //   ...state,
                //   mainPosts,
                //   addCommentLoading: false,
                //   addCommentDone: true,
                // };
            }
            case ADD_COMMENT_FAILURE:
                draft.addCommentLoading = false;
                draft.addCommentError = action.error;
                break;
            default:
                break;
        }
    });
};

export default reducer;