import React, {useEffect, useState} from 'react';
import StandingTeam from "../components/StandingTeam";
import {standings} from "../exempleStanding";
import {Col, message, Row} from "antd";
import axios from "axios";
import {standingsEast, standingsWest} from "../api";
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {firebaseConfig} from "../config/firebaseConfig";
import {doc, setDoc, getDoc } from "firebase/firestore";
import { Input } from 'antd';
import Stats from "../components/Stats";
import {FieldLabel} from "@ant-design/pro-components";
const { Search } = Input;

require("firebase/firestore");

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


const Home = () => {
  useEffect(
    () => {
      document.title = "Home"
    }, []
  )
  const [east, setEast] = useState([]);
  const [west, setWest] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(false);

  const onSearch = async (value) => {
    setSearch(true);
    const docRef = doc(db, "teams", value);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      message.error(value + " not found");
    }
    setSearch(false);
  }

  async function putTeam(data) {
    try {
      await setDoc(doc(db, "teams", data.team.nickname), data);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  async function getStandings(params) {
    setLoading(true);
    try {
      const res = await axios.request(params)
      if (res.data !== null) {
        if (res.data.response[0].conference.name === "east") {
          setEast(res.data.response)
        } else if (res.data.response[0].conference.name === "west") {
          setWest(res.data.response)
        }
      }
    } catch (err) {
    }
    setLoading(false);
  }

  useEffect(() => {
    getStandings(standingsEast)
    // setWest(standings.response)
  }, []);
  useEffect(() => {
    getStandings(standingsWest)
    // setWest(standings.response)
  }, []);
  useEffect(() => {
    east.map((team) => putTeam(team))
  }, [east]);
  useEffect(() => {
    west.map((team) => putTeam(team))
  }, [west]);

  return (
    <Row gutter={4}>
      <Col className="gutter-row" span={7}><StandingTeam conf={'east'} teams={east} loading={loading}/></Col>
      <Col className="gutter-row" span={7}><StandingTeam conf={'west'} teams={west} loading={loading}/></Col>
      <Col className="gutter-row"  span={10}>
        <FieldLabel label="Search a team " />
        <Search size={"large"} placeholder="input team nickname (ex : 'Heat')" onSearch={onSearch} enterButton />
        {data !== null ? <Stats loading={search} data={data}/> : null}
      </Col>
    </Row>
  );


};

export default Home;
