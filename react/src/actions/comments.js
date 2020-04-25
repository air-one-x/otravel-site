export const CHANGE_TITLE_COMMENT = 'CHANGE_TITLE_COMMENT';
export const CHANGE_TEXT_COMMENT = 'CHANGE_TEXT_COMMENT';

export const changeTextComment = (payload) => ({
  type: CHANGE_TEXT_COMMENT,
  payload,
});
export const changeTitleComment = (payload) => ({
  type: CHANGE_TITLE_COMMENT,
  payload,
});