function UserDetails (props) {
  const { item, onCancel } = props
  return (
    <div>
      <h1>{item.username}</h1>
      <h2>{item.fullName}</h2>
      <h3>{item.type}</h3>
      <div>
        <input type='button' value='back' onClick={() => onCancel()} />
      </div>
    </div>
  )
}

export default UserDetails
