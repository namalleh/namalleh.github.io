import Markdown from "react-markdown";
import {useEffect, useState} from "react";

export default function Need() {
    const [data, setData] = useState('');

    useEffect(() => {
        async function getData() {
            try {
                let resp = await fetch("/api/need");
                const data = await resp.text();
                setData(data);
            } catch (e) {
                console.error("error fetching data: ", e);
            }
        }

        getData();
    }, []);

  return (
    <div className="Need">
      <div className="textBox">
        <Markdown>{data}</Markdown>
      </div>
    </div>
  );
}
