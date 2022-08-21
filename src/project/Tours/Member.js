import React from 'react'
import Profil from './Profil'

const Member = ({tour, removeMember}) => {
    return (
        <div className="content">
            <h2>Member Straw Hat Pirates</h2>
            <div>
                {tour.map((member) => {
                    return(
                        <Profil key={member.id} {...member} removeMember={removeMember} />
                    )
                })}
            </div>
        </div>
    )
}

export default Member
