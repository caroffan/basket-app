
import {Button, Result} from "antd";

export default function userNotConnected() {
    return (
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button type="primary" href="/">Back to Login</Button>}
        />
    )


}