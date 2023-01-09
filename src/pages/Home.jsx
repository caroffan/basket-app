import React, {useEffect, useState} from 'react';
import StandingTeam from "../components/StandingTeam";
import {standings} from "../exempleStanding";
import {Col, Row} from "antd";
import axios from "axios";
import {standingsEast, standingsWest} from "../api";

const Home = () => {
    useEffect(
        () => {
            document.title = "Home"
        }, []
    )
    const [east, setEast] = useState([]);
    const [west, setWest] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getStandings(params) {
        setLoading(true);
        try {
            const res = await axios.request(params)
            if (res.data !== null) {
                if (res.data.response[0].conference.name === "east") {
                    setEast(res.data.response)
                }else if (res.data.response[0].conference.name === "west") {
                    setWest(res.data.response)
                }
            }
        } catch (err) {
        }
        setLoading(false);
    }

    useEffect(() => {
        // getStandings(standingsEast)
        setEast(standings.response)
    }, []);
    useEffect(() => {
        // getStandings(standingsWest)
        setWest(standings.response)
    }, []);

    return (
        <Row gutter={4}>
            <Col className="gutter-row" span={6}><StandingTeam conf={'east'} teams={east} loading={loading} /></Col>
            <Col className="gutter-row" span={6} ><StandingTeam conf={'west'} teams={west} loading={loading} /></Col>
        </Row>
    );


};

export default Home;
