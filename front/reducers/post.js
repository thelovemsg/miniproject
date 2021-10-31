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
        },
        {
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
    postAdded: false,
} 

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST
}

const dummyPost = {
    id: 2,
    content: '더미네이터',
    User: {
        id: 1,
        nickname: '제로초',
    },
    Images: [],
    Comments: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            console.log("action.type",action.type);
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true 
            }
        default:
            return state;
    }
};

export default reducer;