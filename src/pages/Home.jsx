import React, {useEffect, useState} from 'react';
import StandingTeam from "../components/StandingTeam";
import {standings} from "../exempleStanding";

const Home = () => {
    useEffect(
        () => {
            document.title = "Home"
        }, []
    )
    const [east, setEast] = useState([]);
    const [west, setWest] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        // axios.request(standingsEast).then((response) => {
        //     setEast(response.data)
        // }).catch((error) => {
        //     console.error(error);
        // });
        setEast(standings)
        setLoading(false);
    }, []);

    return (
        <div>
            <StandingTeam teams={east.response} loading={loading} style={{width: 40}}/>
        </div>
    );


};

export default Home;
