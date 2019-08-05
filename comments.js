import { ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT } from './actions';

export function comments(state = [], action) {
   switch (action.type) {
      case ADD_COMMENT:
         return [
            {
               id: action.id,
               text: action.text,
               thumbs_up: 0,
               thumbs_down: 0
            },
            ...state
         ];
      case REMOVE_COMMENT:
         return state.filter(comment => comment.id !== action.id);

      case EDIT_COMMENT:
         return state.map(comment => {
            if (comment.id === action.id) {
               comment.text = action.text;
            }
            return comment;
         });
      case THUMB_UP_COMMENT:
         return state.map(comment => {
            if (comment.id === action.id) {
               comment.thumbs_up + 1;
            }
            return comment;
         });
      case THUMB_DOWN_COMMENT:
         return state.map(comment => {
            if (comment.id === action.id) {
               comment.thumbs_down + 1;
            }
            return comment;
         });
      default:
         return state;
   }
}
