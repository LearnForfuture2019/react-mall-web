import React from "react";

import {Card} from 'antd'

export default class Item extends React.Component{
    render() {
        return (
            <Card title="Default size card" extra={<a href="#">More</a>}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        )
    }
}