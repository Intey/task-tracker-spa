import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    "intey": {
      "firstName": "Dmitry",
      "secondName": "Romanovich",
      "surName": "Churin",
      "worksheet": [8,8,8,8,8,0,0]
    }
  },
  reducers: {
    addUser: (state, action) => {
      const {nick, ...userdata} = action.payload
      state[nick] = userdata
    }
  }


})
