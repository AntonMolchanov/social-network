import React from "react";
import './ProfileInfo.css'

const ProfileInfo = (props) => {
    return(
        <div className='profile-info'>
            <div className='content-image'>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt=""/>
            </div>
            <div className='profile-description'>
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo