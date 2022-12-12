import React from 'react';
import {Table} from "antd";

const StandingTeam = ({teams}, {loading}) => {
    const columns = [
        {
            title: teams[0].conference.name.toUpperCase(),
            children: [{
                title: '',
                dataIndex: 'conference',
                key: 'conference.rank',
                render: (record) => {
                    return (
                        <div>
                            <p>{record.rank}</p>
                        </div>
                    )
                },
                align: 'center',
                defaultSortOrder: 'ascend',
                width: 10,
                sorter: (a, b) => a.conference.rank - b.conference.rank,
                sortDirections: ['ascend'],
            },
        {
            title: 'Team',
            dataIndex: 'team',
            key: 'team.name',
            render: (record) => {
                return (<div style={{display: "flex", alignItems: "center"}}>
                        <img src={record.logo} alt={'icon'} style={{width: 25}}/>
                        <div>{record.name}</div>
                    </div>
                )
            },
            align: 'center'
        },
        {
            title: 'W',
            dataIndex: 'conference',
            key: 'conference.win',
            render: (record) => {
                return (
                    <div>
                        <p>{record.win}</p>
                    </div>
                )
            },
            align: 'center'
        },
        {
            title: 'L',
            dataIndex: 'conference',
            key: 'conference.loss',
            render: (record) => {
                return (
                    <div>
                        <p>{record.loss}</p>
                    </div>
                )
            },
            align: 'center'
        },
        {
            title: 'W%',
            dataIndex: 'win',
            key: 'win.percentage',
            render: (record) => {
                return (
                    <div>
                        <p>{record.percentage}</p>
                    </div>
                )
            },
            align: 'center'
        },
        {
            title: 'L10',
            dataIndex: 'win',
            key: 'win.lastTen',
            render: (record) => {
                return (
                    <div>
                        <p>{record.lastTen}-{10 - record.lastTen}</p>
                    </div>
                )
            },
            align: 'center'
        }]
}    ]

    return (
        <Table bordered={true}
               loading={loading}
               columns={columns}
               dataSource={teams}
               pagination={false}
               rowKey={record => record.team.id}
               size="small"
               style={{fontSize: 8}}
        />
    );
};

export default StandingTeam;
