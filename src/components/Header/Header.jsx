import Container from "../container/Container"
import "./header.css"
const Header = () => {
  return (
    <header>
        <Container>
        <div className="header">
            <h4 className="head4">Dashboard</h4>
            <div className="right-side"><h4>Admin</h4>
            <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="avatar" className="avatar"/>
            </div>
        </div>
        </Container>
        </header>
  )
}

export default Header
