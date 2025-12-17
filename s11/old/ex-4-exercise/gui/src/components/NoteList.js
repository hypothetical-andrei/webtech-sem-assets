import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { getNotes, deleteNote } from '../actions/actions'

const noteListSelector = state => state.list.notes

const NoteList = (props) => {
  const notes = useSelector(noteListSelector, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch])

  return (
    <div>
      <div>
        <h3>list of notes</h3>
        {
          notes.map(e => (
            <div key={e.id}>
              {e.content}
              <input type='button' value='delete' onClick={() => dispatch(deleteNote(e.id))} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default NoteList
