import Markdown from "react-markdown";

const description = `
AI and other magic wands are not the only way.
---
Fortunately for you, most bots fall into distinct, classifiable categories:
- Really horribly made bots that use open source solutions
- Very detectable browser solutions
- Advanced request bots
- Advanced stealth browsers

Looking at these, you might think - ok, so every antibot covers the first two?

More or less yes, with gaps. There is a tendancy in the anti-scraping industry 
to hold your cards close to your chest, with a lot of obfuscation guarding sensors.
It's really hard to tell the snake oil from the real thing. We'll talk about this in a bit.

Security through obscurity in this case, however, isn't a bad thing - motivated scrapers only have to reverse around 3-5 antibots 
to access most apis on the internet.

Namalleh - A Higher Way
---
In order to block all these four types of automated information extraction, we need to have a solution which is:
1. Hard to reverse
2. Has targeted, difficult to fake sensors
3. Clear classification
4. Actions which make sense for the category of bot, which will stop access or effectively reduce profits gained at your expense


`;

export default function ASolution() {
  return (
    <div className="ASolution">
      <h1>Don't give up!</h1>
      <div className="textBox">
        <Markdown>{description}</Markdown>
      </div>
      <div>
        <form action="mailto:pankon.namalleh@gmail.com">
          <button>
            <div>Let's chat!</div>
          </button>
        </form>
      </div>
    </div>
  );
}
