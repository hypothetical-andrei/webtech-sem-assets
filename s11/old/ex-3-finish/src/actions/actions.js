export function addNote (content) {
  console.warn(content)
  return {
    type: 'ADD_NOTE',
    payload: content
  }
}
