
import Markdown from "react-markdown";
import Mermaid from "./Mermaid.jsx";

const markdown = `So how do I control my bot problem?
---
First off, we need to talk about how scraping research is done a bit.

This is going to get a tad technical, fasten your seatbelts.

First off, a researcher generally will start chrome with a [man in the middle](https://en.wikipedia.org/wiki/Man-in-the-middle_attack).

   \`\`\`bash
    google-chrome --proxy-server=http://127.0.0.1:8080
   \`\`\`
   
And you're going to start looking for internal apis.

![image](./walmart_burp_screenshot.png)

Now this particular graphql api is a tad useless, on purpose. But the idea is the same: As an attacker, you're going to want to
do one of two things:

1. Cleverly craft a custom packet which bypasses all defenses
2. Just render the page - expensive but if you do it right, almost, *almost* undetectable.

Either way you're going to want to use proxies, usually [residential proxies](https://friendlycaptcha.com/wiki/what-is-residential-proxy/) so that your ip doesn't hit a hard block or backoff.

It's not impossible to block residential proxies, colloquially known as resip. But you need a lot of data, and a trusted provider.

As we talked about before, you can generally classify bots into surprisingly few categories:

* Simple request bots
* Open source rendering bots
* Scraping as a service
* AI bots
* SEO Bots
* And a mix.

Namalleh's approach is to give a solution which works out of the box to prevent most attacks.

Contrast this to Cloudflare's approach, where for somewhat decent protection, you're going to need to click "I'm under attack", and start blocking ips.

*None of that.*

This is our most basic config:
`;

const example = `
sequenceDiagram
    participant unprotected.com [server]
    participant unprotected.com [client]
    participant namalleh.cc
    unprotected.com [server]->>unprotected.com [client]: [normal webpage rendering]
    unprotected.com [client]->>namalleh.cc: GET /ant
    namalleh.cc-->>unprotected.com [client]: [dynamic script load]
    unprotected.com [client]-->>unprotected.com [client]: [make cookie and talk with namalleh.cc]
    unprotected.com [client]->>unprotected.com [server]: [some server data query or action w/cookie]
    unprotected.com [server]->>namalleh.cc:  POST /check
    namalleh.cc-->>unprotected.com [server]: [block decision]
`;

const markdownContinued = `
Simple, right?

To integrate you literally just put this in your webpage:

\`\`\`html
<script src="https://namalleh.cc/ant"></script>
\`\`\`

And then do a post request from your backend.

We also provide fine grained control to trigger specific actions on the page based on classification, which you're going to have to talk to us
to get access to.

But you promised
---

This fine-grained behavioral control is based on years advanced scraping research, and is not public.

Among others, our research has included:
* The Google botguard
* F5-Shape VM, Datadome, PerimeterX (Human Security), Cloudflare, ThreatMetrix, Amazon, Recaptcha
* Google services forensic cloud extraction without alerts to the user for a government agency
* Generic bypass research of most commercial antibots and bot management platforms
* At-scale scraping most major ecommerce sites

It is unique within the industry. No solution except ours currently provides the level of protection you need.

Why did you switch sides?
---
Simply put, it was time to uplift the knowledge gained. The name "Namalleh" in Hebrew is a play on two words:
1. Ant - a very hard working crawler (נמלה - Nemaleh)
2. Raising up. (מעלה - Maaleh)

Every aspect of a person can be uplifted to a higher purpose.

So world class research, uplifted to protect your critical assets in a way that you've never seen before.

[Sign me up!](https://button.solutions)
`;


export default function FineGrainedControl() {
    return (
        <div className="FineGrainedControl">
            <div className="textBox">
                <Markdown>{markdown}</Markdown>
                <Mermaid chart={example} />
                <Markdown>{markdownContinued}</Markdown>
            </div>
        </div>
    );
}
