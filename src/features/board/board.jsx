import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IssueEditor } from '../issueEditor/IssueEditor'
import { selectEditorOpened, openIssueEditor } from '../issueEditor/issueEditorSlice'

import {
  selectBoardIssues,
  moveIssue,
  selectStates,
  selectIssuesOnBoard,
  selectStateForUnknown,
} from './boardSlice'

import { selectIssues, addIssue } from '../issues/issuesSlice'
import cx from 'classnames'

import styles from './board.module.css'
import {
  AiOutlineCaretRight,
  AiOutlineCaretLeft,
  AiOutlineExclamation,
  AiFillDownCircle
} from "react-icons/ai"

export function ColumnIssueCard({issue, state}) {
  const states = useSelector(selectStates)
  const dispatch = useDispatch();

  const stateIdx = states.indexOf(state)
  const leftState = states[stateIdx -1]
  const rightState = states[stateIdx +1]

  return <div className={styles.issueCard}>
		<div className={styles.issueCardKey}>{issue.key}</div>
    <div className={styles.issueCardName}>{issue.summary}</div>
      <button className={cx(styles.issueButton, styles.issueLeftTr)}
              disabled={!leftState}
              onClick={() => dispatch(moveIssue({issueKey: issue.key, fromState:state, toState:leftState}))}
      >
        <AiOutlineCaretLeft/>
      </button>
      <button className={cx(styles.issueButton, styles.issueRightTr)}
              disabled={!rightState}
              onClick={() => dispatch(moveIssue({issueKey: issue.key, fromState:state, toState:rightState}))}
      >
        <AiOutlineCaretRight/>
      </button>
  </div>
}

export function StateColumn({state, issues}) {
  return <div className={styles.column}>
    <div className={styles.columnName}>{state}</div>
    <div className={styles.columnIssues}>
      {issues.map((issue) => <ColumnIssueCard key={issue.key} issue={issue} state={state}/>)}
    </div>
  </div>
}

export function Board() {
  const states = useSelector(selectStates)
  const boardIssues = {...useSelector(selectBoardIssues)}
  const issues = useSelector(selectIssues)
  const issuesOnBoard = useSelector(selectIssuesOnBoard)
  const unknownIssues = Object.keys(issues).filter(i => !issuesOnBoard.includes(i))
  const stateForUnknown = useSelector(selectStateForUnknown)
  const issueEditorOpen = useSelector(selectEditorOpened)
  const dispatch = useDispatch();

  boardIssues[stateForUnknown] = boardIssues[stateForUnknown].concat(unknownIssues)

  return <div className={styles.board}>
      <div>
        {
          !issueEditorOpen &&
          <button onClick={() => dispatch(openIssueEditor())}>
           Add issue <AiFillDownCircle/>
          </button>
        }
        {issueEditorOpen && <IssueEditor/>}
      </div>
      <div className={styles.boardColumns}>
        {states.map((state) => {
            const issuesInState = boardIssues[state]
            let issues__ = issuesInState.map(key => ({...issues[key], key}))
            return <StateColumn key={state} issues={issues__} state={state}/>
          })
        }
      </div>
    </div>
}
