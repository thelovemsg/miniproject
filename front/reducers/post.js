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
    likePostLoading: false,
    likePostDone: false,
    likePostError: null,
    unlikePostLoading: false,
    unlikePostDone: false,
    unlikePostError: null,
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

export const LIKE_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LOAD_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'LOAD_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'LOAD_POST_FAILURE';

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

//이전 상태를 action을 통해 다음 상태로 만들어 내는 함수 (불변성을 지키면서)
const reducer = (state = initialState, action) => {
    return produce (state, (draft) => {
        switch (action.type){ 
            case LIKE_POST_REQUEST:
                draft.likePostLoading = true;
                draft.likePostDone= false;
                draft.likePostError= null;
                break;
            case LIKE_POST_SUCCESS: {
                const post = draft.mainPosts.find((v) => v.postId === action.data.postId);
                post.Likers.push({id : action.data.memberId})
                draft.likePostLoading = false;
                draft.likePostDone= true;
                draft.mainPosts.unshift(action.data);
                break;
            }
            case LIKE_POST_FAILURE:
                draft.likePostLoading = false;
                draft.likePostError = action.error;
                break;
            case UNLIKE_POST_REQUEST:
                draft.unlikePostLoading = true;
                draft.unlikePostDone= false;
                draft.unlikePostError= null;
                break;
            case UNLIKE_POST_SUCCESS: {
                const post = draft.mainPosts.find((v) => v.postId === action.data.postId);
                post.Likers = post.Likers.filter((v) => v.postId !== action.data.memberId);
                draft.unlikePostLoading = false;
                draft.unlikePostDone= true;
                draft.mainPosts.unshift(action.data);
                break;
            }
            case UNLIKE_POST_FAILURE:
                draft.unlikePostLoading = false;
                draft.unlikePostError = action.error;
                break;
            case LOAD_POST_REQUEST:
                draft.loadPostLoading = true;
                draft.loadPostDone= false;
                draft.loadPostError= null;
                break;
            case LOAD_POST_SUCCESS:
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
                const post = draft.mainPosts.find((v) => v.postId === action.data.postId);
                post.commentList.push(action.data);
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                break;
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