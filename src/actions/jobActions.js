import { useCallback } from "react";

export const handleName = name => {
  return {
    type: "handleName",
    payload: {
      name
    }
  };
};

export const handleDescription = description => {
  return {
    type: "handleDescription",
    payload: {
      description
    }
  };
};

export const createJob = (name, description) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .database()
      .ref("jobs")
      .push({
        name: name,
        description: description
      });
    dispatch({
      type: "jobStatus",
      payload: {
        jobStatus: true
      }
    });
  };
};

export const getJobs = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .database()
      .ref("jobs")
      .on('value', snapshot => {
        let jobs = [];

        if (snapshot.val() != null) {
          snapshot.forEach(childitem => {
            jobs.push({
              id: childitem.key,
              name: childitem.val().name,
              description: childitem.val().description
            });
          });

          dispatch({
            type: "getJobs",
            payload: {
              jobs
            }
          });
        }
      });
  };
};
