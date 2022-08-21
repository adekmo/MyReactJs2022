import React, { useState } from 'react'

const Profil = ({id, name, age, image, bounty, info, removeMember}) => {

    const [readMore, setReadMore] = useState(false);
    return (
        <div className="memberList">
            <div className="komponen">
                <div className="member">
                    <div>
                        <img className="image" src={image} alt={name}></img>
                    </div>
                    
                    <div className="textMember">
                        <h3>{name}</h3>
                        <p>{age}</p>
                        <h4>$ {bounty}</h4>
                    </div>
                    
                </div>

                    <div className="info">
                        <p>{readMore? info : `${info.substring(0, 140)}...`}</p>
                        <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button>
                    </div>
                <div className="foot">
                    <div className="tombol">
                        <button onClick={() => removeMember(id)}>skip</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profil
