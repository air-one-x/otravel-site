export const CHANGE_NEW_PSEUDO = 'CHANGE_NEW_PSEUDO';
export const INSCRIPTION_SUCCESS = 'INSCRIPTION_SUCCESS'
export const CHANGE_NEW_EMAIL = 'CHANGE_NEW_EMAIL';
export const CHANGE_NEW_PASSWORD = 'CHANGE_NEW_PASSWORD';

export const changeNewPassword = (payload) => ({
    type: CHANGE_NEW_PASSWORD,
    payload,
  });
  export const changeNewEmail = (payload) => ({
    type: CHANGE_NEW_EMAIL,
    payload,
  });
export const changeNewPseudo = (payload) => ({
  type: CHANGE_NEW_PSEUDO,
  payload,
});

export const inscriptionSuccess = () => ({
    type: INSCRIPTION_SUCCESS,
})
