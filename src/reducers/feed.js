const initialState = {
    isFetching: false,
    data: [
        { id: 0, type: 'NEW_DIVE', text: 'Karl logged a new dive' },
        { id: 1, type: 'NEW_DIVE', text: 'Hanna logged a new dive' }
    ]
};

const feed = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default feed;
    