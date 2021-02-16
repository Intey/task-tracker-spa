import { createSlice } from '@reduxjs/toolkit'

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    unknownState: "todo",
    states: [
      "todo",
      "inprogress",
      "done"
    ],
    issue_states: {
    "todo": ["PRJ-2", "PRJ-4", "PRJ-6", "PRJ-7", "PRJ-8", "PRJ-9", "PRJ-10"],
    "inprogress": [],
    "done": ["PRJ-1", "PRJ-5", "PRJ-3"]}
  },
  reducers: {
    moveIssue: (state, action) => {
      const {issueKey, fromState, toState} = action.payload
      state.issue_states[toState].push(issueKey)
      state.issue_states[fromState] = state.issue_states[fromState].filter((key) => key !== issueKey)
    },
  },
});

export const { moveIssue } = boardSlice.actions

export const selectBoardIssues = state => state.board.issue_states
export const selectStates = state => state.board.states

export const selectIssuesOnBoard = state => {
  const {issue_states} = state.board
  return Object.keys(issue_states).reduce((acc, i) => {
    return acc.concat(issue_states[i])
  }, [])
}

export const selectStateForUnknown = state => state.board.unknownState

export default boardSlice.reducer
