import memberImage from '../images/memberImage.png'

const ProfilePic = ({className}) => {
  return (
    <div>
        <img src={memberImage} alt="member profile picture" className={className}/>
    </div>
  )
}
export default ProfilePic