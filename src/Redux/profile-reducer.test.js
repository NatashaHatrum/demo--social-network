import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";


let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It`s my first post', likesCount: 10},
        {id: 3, message: 'This super day!', likesCount: 102},
        {id: 4, message: 'Haloooo!', likesCount: 1},

    ]
};

it ('length of posts should be incremented', () =>{
let action = addPostActionCreator("Hallo-Hallo")

    let newState = profileReducer (state,action);
expect(newState.posts.length).toBe(5);
    });

it ('message of new post should be correct', () =>{
    let action = addPostActionCreator("Hallo-Hallo")
    let newState = profileReducer (state,action);
       expect(newState.posts[4].message).toBe('Hallo-Hallo');
});

it ('after deleting length of message should be decrement ', () =>{
    let action = deletePost (1)
    let newState = profileReducer (state,action);
    expect(newState.posts.length).toBe(3);
});

it ('after deleting length should not  be decrement if id is incorrect', () =>{
    let action = deletePost (100)
    let newState = profileReducer (state,action);
    expect(newState.posts.length).toBe(4);
});