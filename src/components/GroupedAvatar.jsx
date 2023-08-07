import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import image1 from "../images/people/person1.jfif"
import image2 from "../images/people/person2.jfif"
import image3 from "../images/people/person3.jpg"
import image5 from "../images/people/person3.jpg"
import image4 from "../images/people/person4.jpg"

import "../styles/groupedAvatar.css"

function GroupedAvatar() {
    return (
        <div>
            <AvatarGroup style={{margin : "10px 0 10px 0", width :"50px ",justifyContent:"flex-end"}} max={4}>
                <Avatar className="avatar" alt="Remy Sharp" src={image1} />
                <Avatar className="avatar" alt="Travis Howard" src={image2} />
                <Avatar className="avatar" alt="Cindy Baker" src={image3} />
                <Avatar className="avatar" alt="Agnes Walker" src={image4} />
                <Avatar className="avatar" alt="Trevor Henderson" src={image5} />
            </AvatarGroup>
        </div>
    )
}

export default GroupedAvatar