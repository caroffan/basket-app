import React, {useEffect, useState} from 'react';
import StandingTeam from "../components/StandingTeam";
import {standings} from "../exempleStanding";
import {Col, Row} from "antd";

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
    useEffect(() => {
        setLoading(true);
        // axios.request(standingsWest).then((response) => {
        //     setWest(response.data)
        // }).catch((error) => {
        //     console.error(error);
        // });
        setEast(standings)
        setLoading(false);
    }, []);

    return (
        <Row gutter={4}>
            <Col className="gutter-row" span={6}><StandingTeam teams={east.response} loading={loading} /></Col>
            <Col className="gutter-row" span={6} ><StandingTeam teams={east.response} loading={loading} /></Col>
        </Row>
    );


};

export default Home;
