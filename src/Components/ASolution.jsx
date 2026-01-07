import Markdown from "react-markdown";
import {useEffect, useState} from "react";

export default function ASolution() {
    const [data, setData] = useState('');

    useEffect(() => {
        async function getData() {
            try {
                let resp = await fetch("/api/a-solution");
                const data = await resp.text();
                setData(data);
            } catch (e) {
                console.error("error fetching data: ", e);
            }
        }

        getData();
    }, []);
    return (
        <div className="ASolution">
            <h1>Don't give up!</h1>
            <div className="textBox">
                <Markdown>{data}</Markdown>
            </div>
        </div>
    );
}
