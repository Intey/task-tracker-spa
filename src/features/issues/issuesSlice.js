import { createSlice } from '@reduxjs/toolkit'
import { moveIssue } from '../board/boardSlice'

export const issuesSlice = createSlice({
  name: 'issues',
  initialState: {
    issues: {
      "PRJ-1": {
        "summary": "MVP: Make styles",
        "assignee": "intey",
      },
      "PRJ-2": {
        "summary": "Display single issue",
        "assignee": "intey",
      },
      "PRJ-3": {
        "summary": "Show issues that not in any state(unbinded state?)",
        "assignee": "intey",
      },
      "PRJ-4": {
        "summary": "Summary max width & tooltips",
        "assignee": "intey",
      },
      "PRJ-5": {
        "summary": "Moving issues from state to state",
        "assignee": "intey",
      },
      "PRJ-6": {
        "summary": "Join to API",
        "assignee": "intey",
      },
      "PRJ-7": {
        "summary": "Epic Streams as bigger tasks",
        "assignee": "intey",
      },
      "PRJ-8": {
        "summary": "Assignee info",
        "assignee": "intey",
      },
      "PRJ-9": {
        "summary": "Task type info",
        "assignee": "intey",
      },
      "PRJ-10": {
        "summary": "Sync new issues from backend",
        "assignee": "intey",
      },
      "PRJ-11": {
        "summary": "LocalStorage saving temporaly prepared",
        "assignee": "intey",
      },
      "PRJ-12": {
        "summary": "Make new issue",
        "assignee": "intey",
      }
    }
  },
  reducers: {
    addIssue: (state, action) => {
      const {key, ...rest} = action.payload
      state.issues[key] = rest
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("Issue"),
        (state, action) => {
          const {issueKey, fromState, toState} = action.payload
          const issue = state.issues[issueKey]
            if (issue)
              issue.temporal = true
          return state
        }
      )
  }
});

export const { addIssue } = issuesSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectIssues = state => state.issues.issues

export default issuesSlice.reducer
