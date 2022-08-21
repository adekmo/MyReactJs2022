import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Member from './Member';

const url = 'http://localhost:8000/anggota';

const IndexTour = () => {

    const [loading, setLoading] = useState(true);
    const [tour, setTour] = useState([]);

    const removeMember = (id) => {
        const newMember = tour.filter((member) => member.id !== id);
        setTour(newMember);
    }

    const getMembers = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const tour = await response.json();
            setLoading(false);
            setTour(tour);
        } catch (error) {
            setLoading(false)
        }
    }

    useEffect(() => {
        getMembers();
    }, [url]);

    if(loading){
        return(
            <main>
                <Loading />
            </main>
        )
    }

    if(tour.length === 0) {
        return(
            <main>
                <h2>no more left</h2>
                <button onClick={() => getMembers()}>refresh</button>
            </main>
        )
    }

    return (

            <main>
                <Member tour={tour} removeMember={removeMember} />
            </main>
    )
}

export default IndexTour
