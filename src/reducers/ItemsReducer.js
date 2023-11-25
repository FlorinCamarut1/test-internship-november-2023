const initialState = {
  data: [],
  search: '',
  localData: [],
  currentItem: {},
  modalOpen: false,
  openData: '',
  error: null,
  isLoading: false,
};
const ItemsReducer = (state, action) => {
  switch (action.type) {
    case 'data':
      return { ...state, data: action.payload };
    case 'search':
      return { ...state, search: action.payload };
    case 'updateLocalData':
      return { ...state, localData: [...state.localData, action.payload] };
    case 'deleteItem':
      return {
        ...state,
        localData: state.localData.filter(
          (item) => item.name !== action.payload
        ),
      };
    case 'selectedItem':
      return { ...state, currentItem: action.payload };
    case 'modalState':
      return { ...state, modalOpen: !state.modalOpen };
    case 'setModalData':
      return { ...state, openData: JSON.stringify(action.payload) };
    case 'error':
      return { ...state, error: action.payload };
    case 'loading':
      return { ...state, isLoading: action.payload };
    default:
      throw new Error('no data to dispatch');
  }
};
export { ItemsReducer, initialState };
