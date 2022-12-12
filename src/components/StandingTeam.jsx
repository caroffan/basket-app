import React from 'react';
import {Table} from "antd";

const StandingTeam = (teams) => {
    const columns = [
        {

        }
    ]

    return (
        <Table columns={columns} dataSource={teams}/>
    );
};

export default StandingTeam;
