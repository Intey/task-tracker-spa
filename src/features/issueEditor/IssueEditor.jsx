import React, { useState } from 'react'
import { closeIssueEditor } from './issueEditorSlice'
import { addIssue, selectNextIssueKey } from '../issues/issuesSlice'

import { useDispatch, useSelector } from 'react-redux'

import {
  AiFillUpCircle,
  AiFillPlusCircle
} from "react-icons/ai"

import styles from './IssueEditor.module.css'

export function IssueEditor() {
  const dispatch = useDispatch()
  const [ summary, setSummary ] = useState("")
  const [ description, setDescription ] = useState("")

  const nextIssue = useSelector(selectNextIssueKey)

  return <div className={styles.issueEditor}>
    <button onClick={() => dispatch(closeIssueEditor())}>
      <AiFillUpCircle/>
    </button>
    <input type="text" value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="summary"/>
    <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="description"/>
    <button onClick={() => {
      dispatch(addIssue({key: ("PRJ-" + nextIssue), summary, description}))
      dispatch(closeIssueEditor())
    }
    }>
      <AiFillPlusCircle/>
    </button>
  </div>
}
