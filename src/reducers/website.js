const initialState = 'http://angelika.me/';

function websiteChooserReducer(state = initialState, action) {
  switch (action.type) {
  case 'SET_URL':
    return action.url;
  default:
    return state;
  }
}

export default websiteChooserReducer;

