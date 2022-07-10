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
  memberDetails: {
    status: {},
    category: {},
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
    case "setMemberDetails": {
      console.log("rest", rest.selected, "state", state, "type", type);
      return { ...state, memberDetails: rest.selected };
    }

    case "updateMemberDetails": {
      console.log("update member rest", rest, "state", state, "type", type);
      console.log(state.memberDetails);
      return rest.item.MemberStatus
        ? {
            ...state,
            memberDetails: {
              status: {
                ...rest.item,
              },
              category: {
                ...state.memberDetails.category,
              },
            },
          }
        : {
            ...state,
            memberDetails: {
              status: {
                ...state.memberDetails.status,
              },
              category: {
                ...rest.item,
              },
            },
          };
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
