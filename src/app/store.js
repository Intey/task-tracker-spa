import { configureStore } from '@reduxjs/toolkit'
import issuesReducer from '../features/issues/issuesSlice'
import boardReducer from '../features/board/boardSlice'
import issueEditorReducer from '../features/issueEditor/issueEditorSlice'

import {loadState, saveState} from './localStorage'

const store = configureStore({
  reducer: {
    issues: issuesReducer,
    board: boardReducer,
    issueEditor: issueEditorReducer
  },
  preloadedState: loadState()
});

store.subscribe(() => {
  console.log("saving store")
  const {issues, board} = store.getState()
  saveState({issues, board})
})

export default store
