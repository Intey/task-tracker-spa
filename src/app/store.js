import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import issuesReducer from '../features/issues/issuesSlice'
import boardReducer from '../features/board/boardSlice'

export default configureStore({
  reducer: {
    issues: issuesReducer,
    board: boardReducer
  },
});
