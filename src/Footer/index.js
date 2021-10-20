const UserProfile = props => {
  const {userDetails, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = userDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li>
      <div>
        <p>{timeAccessed}</p>
        <div>
          <img src={logoUrl} alt="domain logo" />
          <p>{title}</p>
          <p>{domainUrl}</p>
        </div>
        <div>
          <button type="button" testid="delete" onClick={onDelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default UserProfile
