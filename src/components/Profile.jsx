import "../styles/profile.css"
export default function Profile ({ userData }) {
  return (
    <> 
      <div className="Parent">
          <div className="Child">
            <img className="Images" src={userData.imgSrc} alt={userData.name} />
          </div>
          <div className="Apo">
            <h1>{userData.name}</h1>
            <p>{userData.role}</p>
            <p>{userData.description}</p>
            <a href={userData.buttonLabel} target="_blank"><button buttonLabel={userData.buttonLabel} className="button">Link</button></a>
          </div>
      </div>
    </>
  )
}