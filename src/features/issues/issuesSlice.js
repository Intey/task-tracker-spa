import { createSlice } from '@reduxjs/toolkit'
import { moveIssue } from '../board/boardSlice'

export const issuesSlice = createSlice({
  name: 'issues',
  initialState: {
    issues: {
      "PRJ-1": {
        "summary": "MVP: Make styles",
        "assignee": "intey",
        "type": "Story",
      },
      "PRJ-2": {
        "summary": "Display single issue",
        "assignee": "intey",
        "type": "Story",
      },
      "PRJ-3": {
        "summary": "Show issues that not in any state(unbinded state?)",
        "assignee": "intey",
        "type": "Story",
      },
      "PRJ-4": {
        "summary": "Summary max width & tooltips",
        "assignee": "intey",
        "type": "Story",
      },
      "PRJ-5": {
        "summary": "Moving issues from state to state",
        "assignee": "intey",
        "type": "Story",
      },
      "PRJ-6": {
        "summary": "Join to API",
        "assignee": "intey",
        "type": "Story",
      },
      "PRJ-7": {
        "summary": "Epic Streams as bigger tasks",
        "assignee": "intey",
        "type": "Story",
      },
      "PRJ-8": {
        "summary": "Assignee info",
        "assignee": "intey",
        "type": "Story",
      },
      "PRJ-9": {
        "summary": "Task type info",
        "assignee": "intey",
        "type": "Story",
      },
      "PRJ-10": {
        "summary": "Sync new issues from backend",
        "assignee": "intey",
        "type": "Story",
      },
      "PRJ-11": {
        "summary": "LocalStorage saving temporaly prepared",
        "assignee": "intey",
        "type": "Story",
      },
      "PRJ-12": {
        "summary": "Make new issue",
        "assignee": "intey",
        "type": "Story",
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

export const selectIssues = state => state.issues.issues
export const selectNextIssueKey = state => {
  let keys = Object.keys(state.issues.issues)
  return keys.reduce((maxKey, key) => {
    const idx =  parseInt(key.split('-')[1])
    return (idx > maxKey ? idx : maxKey)
  }, 0)
}

export default issuesSlice.reducer
