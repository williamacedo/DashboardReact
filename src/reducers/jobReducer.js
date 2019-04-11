const initialState = {
  name: "",
  description: "",
  jobStatus: false,
  jobs: []
};

const jobReducer = (state = initialState, action) => {
  if (action.type === "getJobs") {
    return { ...state, jobs: action.payload.jobs };
  }

  if (action.type === "jobStatus") {
    return { ...state, jobStatus: action.payload.jobStatus };
  }

  if (action.type === "handleName") {
    return { ...state, name: action.payload.name };
  }

  if (action.type === "handleDescription") {
    return { ...state, description: action.payload.description };
  }

  return state;
};

export default jobReducer;
