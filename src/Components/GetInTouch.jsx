import Markdown from "react-markdown";

const description = `8.5 years of cyber expertise, directed to protect your assets`;

export default function GetInTouch() {
  return (
    <>
      <div className="textBox">
        <Markdown>{description}</Markdown>
      </div>
      <div>
        <form action="mailto:pankon.namalleh@gmail.com">
          <button>
            <div>Send us a mail</div>
          </button>
        </form>
      </div>
    </>
  );
}
