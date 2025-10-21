import Markdown from "react-markdown";
const markdown = `Your backend apis are probably only partially protected.
---
**TLDR; Your antibot is probably broken and you are losing money**

Now for some technical details:

Once you get past the basics of preventing DDOS attacks using a CDN
and basic WAF such as [Cloudflare](https://www.cloudflare.com/application-services/products/waf/),
you might think you'd be covered.

And you could be right, if you're a small enough target.

But if you're a big target, there will be money to be made from your
information. So scraping becomes lucrative and attractive as the
partial exfiltration of your live data is immediately resellable.

Threat Landscape
---
There exists an entire ecosystem of antibot solvers, from [2captcha](https://2captcha.com/)
to browser based solutions, like [Browserbase](https://docs.browserbase.com/features/stealth-mode) 
among others.

For cloudflare specifically there are two main solvers used:
- [Capsolver](https://www.capsolver.com/products/cloudflare)
- [2Captcha](https://2captcha.com/p/cloudflare-turnstile)

For the low price of $1.45 per 1000 cookies - of the CAPTCHA only - your site becomes completely exposed.

These cookies can often be reused at scale until blocked.

How can I tell how good my protection is?
---
First we need to talk antibots.

There are three components of any antibot:
1. Collection of sensors
2. Black-box classification
3. Action

Let's break it down.

Collection of Sensors
---
There are around four "worlds" of sensors for an antibot:
- TCP/TLS
- HTTP (usually header analysis)
- Javascript
- Behavioral

The richest space of these is the javascript world, which can discover everything from your real ip
to what your gpu is.

The classic source of wisdom in this field is the unfortunately unmaintained [creepjs](https://abrahamjuliot.github.io/creepjs/), 
which is a POC that shows in a quick view how easy it is to fingerprint a given target,
as well as some basic leaks that scrapers often miss.

The problem is, that stealth browsers and solvers know how to bypass all of these 200+ sensors with ease.
Classical antibots are surprisingly conservative and generally do not try new things, and generally focus
on marketing what is in their hand over deep research into sensors. That isn't to say there isn't innovation.

[Imperva](https://www.imperva.com/products/web-application-firewall-waf/) for instance, added some sensors which detect
a custom browser running in a vm environment, which were quite clever.

But they and a few others are a minority.

And so, your endpoints are mostly secured, that is - they are secured against open source solutions, but not
your real competitors and those that wish to make use of your business critical data. The serious scrapers and crawlers
are willing to pay significant sums to extract realtime "business intelligence".

Also known is that ChatGPT and similar lower the bar to copycats and resellers.

So is there another way?

Yes!
`;

export default function Need() {
  return (
    <div className="Need">
      <div className="textBox">
        <Markdown>{markdown}</Markdown>
      </div>
    </div>
  );
}
