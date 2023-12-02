import LogoWithName from "../svg/LogoWithName"

const FooterBottom = ({companyName, fill}) => {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <span style={{color: `${companyName}`}}>&copy; 2023</span> <LogoWithName Kcolor='#fff' width='130' height='40' fill={fill} companyName={companyName}/>
    </div>
  )
}
export default FooterBottom