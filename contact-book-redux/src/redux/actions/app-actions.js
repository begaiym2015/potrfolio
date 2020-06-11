import axios from 'axios';

const setContactData = (data) => ({
    type: 'SET_DATA',
    payload: data
});


export const getContactData = () => async(dispatch ) => {
    const {data} = await axios.get('http://localhost:8000/contact');
    dispatch(setContactData(data));
}

export const addContact = (contact) => async (dispatch) => {
    await axios.post('http://localhost:8000/contact', contact);
    dispatch(getContactData());
}

export const deleteContact = (currentContact) => async (dispatch) => {
    await axios.delete(`http://localhost:8000/contact/${currentContact}`);
    dispatch(getContactData());
}
export const editContact = (currentContact) => async(dispatch) => {
    axios.put(`http://localhost:8000/contact/${currentContact.id}`, currentContact);
    dispatch(getContactData());
}

