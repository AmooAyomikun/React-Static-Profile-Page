import React from 'react'
import profileData from './data'
import CoverBanner from './component/CoverBanner'
import ProfileInfo from './component/ProfileInfo'
import StateBar from './component/StateBar'
import SkillsList from './component/SkillsList'
import SocialLinks from './component/SocialLinks'

const App = () => {
  return (
    <>
        <div className="container">
            <CoverBanner />

            <ProfileInfo 
                name = {profileData.name}
                handle = {profileData.handle}
                location = {profileData.location}
                bio = {profileData.bio}
            />

            <StateBar statInfo = {profileData.stats} />

            <SkillsList skills = {profileData.skills} />

            <SocialLinks socialLink = {profileData.socialLinks} />
        </div>
    </>
  )
}

export default App