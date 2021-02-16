
export function loadState() {
  try {
    const state = localStorage.getItem('state')
    if (state === null) return undefined
    return JSON.parse(state)
  }
  catch (err) {
    return undefined
  }
}

export function saveState(state) {
  try {
    const data = JSON.stringify(state)
    localStorage.setItem('state', data)
  } catch (err) {
    console.error("save store error", err)
  }

}
