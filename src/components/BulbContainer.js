import BulbIcon from "../svg/BulbIcon"

const BulbContainer = ({bulb_container, text, text_margin}) => {
  return (
   
    <section className="bulb_container" style={bulb_container}>
        <BulbIcon />
        <div className="vertical_line"></div>
        <p className="bulb_text" style={text_margin}>{text}</p>
    </section>
 
  )
}
export default BulbContainer