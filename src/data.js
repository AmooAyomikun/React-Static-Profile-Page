import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const profileData = {
    name: "Amoo Quadri Ayomikun",
    handle: "@AmooAyomikun",
    location: "Oyo State, NG.",
    bio: "Frontend developer. i love building clean UIs and learning in public. Open to collaborations",

    stats: [
        {
            value: "40+",
            label: "Projects"
        },
        {
            value: "600",
            label: "Followers"
        },
        {
            value: "450",
            label: "Following"
        }
    ],

    skills: [
        "HTML", "CSS", "JavaScript", "React", "Git"
    ],

    socialLinks: [
        {
            platform: "Github",
            username: "AmooAyomikun",
            url: "https://github.com/AmooAyomikun",
            logo: faGithub
        },
        {
            platform: "Twitter",
            username: "@ayomhykun",
            url: "https://github.com/AmooAyomikun",
            logo: faTwitter
        },
        {
            platform: "Linkedin",
            username: "AmooAyomikun",
            url: "https://github.com/AmooAyomikun",
            logo: faLinkedin
        }
    ]
        
}


export default profileData