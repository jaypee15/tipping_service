import LogoWithName from "../svg/LogoWithName"

const FooterBottom = ({companyName, fill}) => {
  const currentYear = new Date().getFullYear();
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <span style={{color: `${companyName}`}}>&copy; {currentYear}</span> <LogoWithName Kcolor='#fff' width='130' height='40' fill={fill} companyName={companyName}/>
    </div>
  )
}
export default FooterBottom