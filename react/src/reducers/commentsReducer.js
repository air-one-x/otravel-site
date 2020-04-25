import { CHANGE_TEXT_COMMENT, CHANGE_TITLE_COMMENT } from '../actions/comments';

export const initialState = {
    form: {
        title: '',
        comment: '',
    }
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_TEXT_COMMENT:
            return {
                ...state,
                form: {
                    ...state.form,
                    comment: action.payload,
                }

            };
            case CHANGE_TITLE_COMMENT:
                return {
                    ...state,
                    form: {
                        ...state.form,
                        title: action.payload,
                    }
                };
            default:
                return state;
    }
}