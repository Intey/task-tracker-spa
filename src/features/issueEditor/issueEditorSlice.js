import { createSlice } from '@reduxjs/toolkit'

export const issueEditorSlice = createSlice({
  name: 'issueEditor',
  initialState: {
    opened: false
  },
  reducers: {
    openIssueEditor: (state, action) => {
      state.opened = true
      return state
    },
    closeIssueEditor: (state, action) => {
      state.opened = false
      return state
    }
  }
})

export const { openIssueEditor, closeIssueEditor } = issueEditorSlice.actions

export const selectEditorOpened = state => state.issueEditor.opened

export default issueEditorSlice.reducer
