import React from 'react';
import {Card, Col, Row, Statistic} from "antd";
import {ArrowDownOutlined, ArrowUpOutlined} from "@ant-design/icons";

const Stats = ({data, loading}) => {
  return (
    <div>
      <Card loading={loading} bordered={false} style={{marginBottom: 8, marginTop: 8}}>
        <Row gutter={16}>
          <Col span={12}>
            <Statistic groupSeparator={""} title="Season" value={data.season}/>
          </Col>
          <Col span={12}>
            <Statistic title="Team" value={data.team.name}/>
          </Col>
          <Col span={12}>
            <Statistic title="Conference" value={data.conference.name}/>
          </Col>
          <Col span={12}>
            <Statistic title="Division" value={data.division.name}/>
          </Col>
        </Row>
      </Card>
      <Row gutter={16}>
        <Col span={24} style={{marginBottom: 8, marginTop: 8}}>
          <Card loading={loading} bordered={false}>
            <Row style={{justifyContent: "space-around"}}>
              <Statistic
                title="Rank"
                value={data.conference.rank}
                valueStyle={{
                  color: data.winStreak ? '#3f8600' : '#cf1322',
                }}
                prefix={data.winStreak ? <ArrowUpOutlined/> : <ArrowDownOutlined/>}
              />
              <Statistic
                title="Last 10"
                value={data.win.lastTen}
                valueStyle={{
                  color: data.win.lastTen >= 5 ? '#3f8600' : '#cf1322',
                }}
              />
              <Statistic
                title="Games Behind "
                value={data.gamesBehind === null ? "no Info" : data.gamesBehind}
              />
            </Row>
          </Card>
        </Col>
        <Col span={12}>
          <Card loading={loading} title={"Wins"} bordered={false}>
            <Statistic
              title="Home"
              value={data.win.home}
              valueStyle={{
                color: '#3f8600',
              }}
            />
            <Statistic
              title="Away"
              value={data.win.away}
              valueStyle={{
                color: '#3f8600',
              }}
            />
            <Statistic
              title="Total"
              value={data.win.total}
              valueStyle={{
                color: '#3f8600',
              }}
            />
            <Statistic
              title="Percentage"
              value={data.win.percentage * 100}
              precision={2}
              valueStyle={{
                color: '#3f8600',
              }}
              suffix={"%"}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card loading={loading} title={"Losses"} bordered={false}>
            <Statistic
              title="Home"
              value={data.loss.home}
              valueStyle={{
                color: '#cf1322',
              }}
            />
            <Statistic
              title="Away"
              value={data.loss.away}
              valueStyle={{
                color: '#cf1322',
              }}
            />
            <Statistic
              title="Total"
              value={data.loss.total}
              valueStyle={{
                color: '#cf1322',
              }}
            />
            <Statistic
              title="Percentage"
              value={data.loss.percentage * 100}
              precision={2}
              valueStyle={{
                color: '#cf1322',
              }}
              suffix={"%"}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Stats;
