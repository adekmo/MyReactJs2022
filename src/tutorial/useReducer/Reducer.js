export const reducer = (state, action) => {
    const newPeoples = [...state.people, action.payload];
    if(action.type === 'ADD_NAME'){
        return {...state, people:newPeoples, showModal: true, modalContent: 'sukses'};
    }

    if(action.type === 'NO_VALUE'){
        return {...state, showModal: true, modalContent: 'isi nama'};
    }

    if(action.type === 'CLOSE_MODAL'){
        return {...state, showModal: false};
    }

    if(action.type === 'REMOVE_ITEM'){
        const newPeoples = state.people.filter((persons) => persons.id !== action.payload);
        return {...state, people: newPeoples}
    }

    throw new Error('nama tidak sesuai');
    // return state;
}