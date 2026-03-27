import github from "../assets/github.jpg"
import linkedin from "../assets/linkdin.png"
import gmail from "../assets/gmail.png"
const Contact = () => {
    return (
        <>
            <div>
                <h2>Let's work together</h2>
                <p>Open to internships and junior frontend role</p>
            </div>
            <div>
                <div>
                    <img src={linkedin} alt="LogoLinkedin" />
                    <p>Linkedin</p>
                </div>
                <div>
                    <img src={github} alt="Logogithub" />
                    <p>Github</p>
                </div>
                <div>
                    <img src={gmail} alt="Logogmail" />
                    <p></p>
                </div>
            </div>
        </>
    )
}

export default Contact
