import shortid from "shortid";

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getAllList = (state) => state.lists;

const ADD_LIST = 'app/lists/ADD_LIST';
export const addList = payload => ({type: ADD_LIST, payload});
const listsReducer = (statePart = [], action) => {
    switch(action.type) {
        case ADD_LIST:
            return [...statePart, { ...action.payload, id: shortid() }];
        default:
            return statePart;
    }
}
export default listsReducer;