import box from "../Components/Dialogs/dialog-item/Avatar/dialog-avatars/box.jpg";
import ilona from "../Components/Dialogs/dialog-item/Avatar/dialog-avatars/ilona.jpg";
import kostia from "../Components/Dialogs/dialog-item/Avatar/dialog-avatars/kostia.jpg";
import mama from "../Components/Dialogs/dialog-item/Avatar/dialog-avatars/mama.jpg";
import nikita from "../Components/Dialogs/dialog-item/Avatar/dialog-avatars/nikita.jpg";
import dasha from "../Components/Dialogs/dialog-item/Avatar/dialog-avatars/dasha.jpg";

let rerenderEntireTree = () => {
    console.log('state changed')
}


let state = {
    profile: {
        postsData: [
            {id: 1, likeCount: 1, postMessage: 'Hello there!!!', imageSrc: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg'},
            {id: 2, likeCount: 1123, postMessage: 'I became a front-end developer!!!', imageSrc: 'https://i.pinimg.com/474x/60/b4/7e/60b47e2dfdbe3f0e2adf74129fbea3b0.jpg'},
            {id: 3, likeCount: 3211, postMessage: 'I have eaten my dog after I saw it fuck my cat))))', imageSrc: 'https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg'},
            {id: 4, likeCount: 145, postMessage: 'I learned React!!!', imageSrc: 'https://mpng.subpng.com/20181126/exl/kisspng-robot-avatar-gynoid-animation-human-cyberman-bot-libre-5bfb8d8a7ff8c4.6397111415432124265242.jpg'},
            {id: 5, likeCount: 12, postMessage: 'I`m just a hero....', imageSrc: 'https://png.pngtree.com/png-clipart/20190705/original/pngtree-man-avatar-icon-professional-man-character-png-image_4356027.jpg'},
        ],
        newPostText: 'Share your thoughts here'
    },
    getState(){
        return this.profile
    },
    getProfile(){
        return console.log(this.getState().postsData)
    },
    dialogs: {
        dialogsData: [
            {id: 1, name: 'Alexander', message: 'Когда на бокс?',  avatar: box},
            {id: 2, name: 'Ilona', message: 'люблю тебя)))', avatar: ilona},
            {id: 3, name: 'Kostia', message: 'написал новую библиотеку. Затестишь?', avatar: kostia},
            {id: 4, name: 'Olga', message: 'как дела, сынок?', avatar: mama},
            {id: 5, name: 'Nikita', message: 'Секрет женского оргазма - заусенец на пальце! Гоги доу - 1351 до н.э.', avatar: nikita},
            {id: 6, name: 'Dasha', message: 'сошлась с Юликом', avatar: dasha},
        ]
    },
    sidebar:{
        friends: [

        ]
    }
}

export const addPost = () => {
    let newId = state.profile.postsData.length + 1
    let newPost = {
        id: newId,
        likeCount: 0,
        postMessage: state.profile.newPostText,
        imageSrc: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg',
    }
    state.getProfile()
    state.profile.postsData.push(newPost)
    updatePostText('')
    rerenderEntireTree(state)
}

export const updatePostText = (newText) => {
    state.profile.newPostText = newText;
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}
export default state;