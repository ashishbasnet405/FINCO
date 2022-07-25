import { createStore } from "redux";
const initialState = {
  sidebarShow: true,
  dropDownData: {},
  modalVisible: {
    status: false,
    statusCode: "",
    message: "",
  },
  jobStatus: {},
  mainModalVisible: {
    shows: false,
    modalName: "",
  },
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };

    case "setOfficeDetails":
      return { ...state, dropDownData: rest };

    case "setModal": {
      return { ...state, modalVisible: rest };
    }

    case "getJobStatus": {
      return { ...state, jobStatus: rest };
    }
    case "setJobStatus": {
      console.log("setjob", rest);
      return { ...state, ...rest };
    }
    default:
      return state;
  }
};

const store = createStore(
  changeState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
