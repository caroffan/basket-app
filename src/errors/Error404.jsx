import {Button, Result} from "antd";

function Error404() {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, this page does not exist."
            extra={<Button type="primary" href="/">Home</Button>}
        />
    )
}

export default Error404