'use client';

import { Scrollyteller, Folio } from '@nomic-ai/atlas-stories-react';
import '@nomic-ai/atlas-stories-react/dist/style.css';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <div className="p-4">
        <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to examples</Link>
      </div>
      
      <div
        className="main"
        style={{
          margin: '50px',
          maxWidth: 'calc(100vw - 100px)',
        }}
      >
        <b>Risky Businesses</b><br/><br/>

        <p>Welcome to a deep dive into the fascinating world of Y Combinator startups.</p><br/>

        <p>We are going to use <a href="https://atlas.nomic.ai">Atlas</a> to analyze the language used to describe these startups. Whether you're a seasoned entrepreneur scoping out trends, a tech enthusiast hungry for insider knowledge, or simply curious about the inner workings of Silicon Valley, this story will give you some perspective on what tends to separate the winners from the rest of the pack.</p><br/>

        <p>Special thanks to our collaborator Steven Liss of <a href="https://www.openads.ai/">OpenAds</a>, an Atlas user who built a <a href="https://ycomparator.stevenliss.com/">fun app</a> around this dataset & wrote an earlier version of this story <a href="https://stevenliss.substack.com/p/the-riskiest-startups-to-found-from">here</a> on his Substack!</p>

        <Scrollyteller baseURL="https://atlas-next-test-prod.vercel.app" map='openads/yc-all-companies-to-s24/map/7c6808b6-2460-47aa-a260-8957b0690037'>

          <Folio hash="tVHC" zoom={{ x: [-5 , 0], y: [-27, 20] }} duration={2000}>
            <p>Atlas works by generating embeddings (high-dimensional vectors) of each company's description; reducing the dimensionality of each vector to 2D; then, visualizing the resulting clusters and inferring labels for them.</p>
            <p>The closer two dots appear, the more related the companies' descriptions.</p>
            <p>Each point is colored based on its inferred topic by Atlas. Hover your mouse over the points to see which startups they represent!</p>
          </Folio>

          <Folio hash="Msbc" zoom={{ x: [-6, -1], y: [2, 11] }} duration={2000}>
            <p>There are obvious clusters: the blue retail cluster is all the 10-minute grocery delivery startups founded after DoorDash.</p>
          </Folio>

          <Folio hash="MrOb" zoom={{ x: [4, 6], y: [8, 17] }} duration={2000}>
            <p>Aviation's purple cluster is illustrative.</p>
            <p>The dense center of the southern subcluster is all electric passenger aircraft, and moving outward leads to more varied companies, like supersonic UAVs.</p>
            <p>The northeast aviation subcluster is space tech.</p>
          </Folio>

          <Folio hash="vFsV" zoom={{ x: [-5 , 0], y: [-27, 20] }} duration={2000}>
            <b>What's hype now</b>
            <p>If we filter by all the Y Combinator startups accepted Spring 2023 and afterwards, we can see the post-ChatGPT world of startups take shape.</p>
            <p>We see which areas got hollowed out (retail, fintech, education) and which new areas are hot (Cellular engineering, anything to do with LLMs, AI for sales and customer support).</p>
            <p>At a glance, there's actually a very wide variety of AI startups given the sparsity of their cluster, with some local clumps for similar LLM eval startups.</p>
          </Folio>

          <Folio hash="Id1T" zoom={{ x: [-5 , 0], y: [-27, 20] }} duration={2000}>
            <b>Risky business</b>
            <p>But we're here to learn which companies are predisposed to success or failure.</p>
            <p>Let's change the coloring to reflect company status:</p>
            <p>Orange = acquired, teal = IPO, red = dead (we're graying out still-active startups to more clearly see the ones at the end of their journey).</p>
          </Folio>

          <Folio hash="b7vR" zoom={{ x: [-7, -3], y: [0, 9] }} duration={2000}>
            <b>A horrifying cluster</b>
            <p>This bloodbath was direct-to-consumer (DTC) / social / retail / fashion.</p>
            <p>Everyone knows social is hard, and DTC is hard, so it follows that the combination is geometrically harder.</p>
            <p>These are still good bets for Y Combinator since a DTC/social home run will have a massive TAM, but if you're a founder thinking of starting the next social fashion subscription box, you should be aware of all the skeletons in this region.</p>
          </Folio>

          <Folio hash="fE49" zoom={{ x: [-16 , -15], y: [-13, -4] }} duration={2000}>
            <b>Risk-free business</b>
            <p>Let's find a happier region of vector space. Nothing but acquisitions here!</p>
            <p>Turns out, starting an enterprise database software company is the surest path to acquisition. All you have to do is add "DB" to your name, and you can't lose!</p>
            <p>(This could also be a function of such companies requiring such skilled tech talent that there's always the off-ramp possibility of an acquihire.)</p>
          </Folio>
        </Scrollyteller>

        <br/><b>Modeling any startup's prospects</b><br/><br/>
        <p>"But what does this mean for my startup?" founders ask.</p>
        <p>"What about my portcos?" ask venture capitalists.</p>
        <p>Well, Steven was stuck on a tarmac for 3 hours this past Labor Day, so he built an application using the Atlas dataset called <a href="https://ycomparator.stevenliss.com/">Y Comparator</a>.</p>
        <p><a href="https://ycomparator.stevenliss.com/">Y Comparator</a> allows you to input a brief description of your startup (1-5 sentences) and instantly identifies the 50 most similar Y Combinator startups from our dataset.</p>
        <div className="flex justify-center">
          <img src="/ycomparator.png" alt="Y Comparator" className="w-1/2" />
        </div>
        <p>This similarity is determined using Nomic's embedding model, which encodes your startup description and compares it to the encoded descriptions of Y Combinator startups.</p>
        <p>Based on the success rates of these similar startups, Y Comparator estimates the chances of success for your venture. For those interested in the technical details, the <a href="https://github.com/sliss/aigtmi">source code</a> is public!</p>
        <p>Take the percentile with a grain of salt, but the similar neighbors retrieved are useful for competitive research, identifying other founders to collaborate with, and getting a sense for the industry's history – the sort of broad, "vibe" based background knowledge that used to only be obtainable by working in-industry. Investors incorporate similar processes into their diligence, if only to get quick background vibes on comparable companies in a space.</p>
        <p>The distribution of raw success-propensities looks like this. There's a long tail of "bad" ideas, but most calculations cluster around neutral, given that YC has expanded in recent years, so there's more weight to new sectors without strong positive/negative signals. What's interesting is the drop-off in the top quintile: there's a very thin distribution of companies in the really good clusters.</p>
        <div className="flex justify-center">
          <img src="/yc_histogram.png" alt="Y Comparator" className="w-1/2" />
        </div>
        <p>🤑 The safest idea ever funded by Y Combinator? 🤑</p>
        <p>"Scalable, cloud-ready relational database"</p>
        <p>💀 The riskiest? 💀</p>
        <p>"Mix and listen to user-shared music online"</p>
      </div>
    </div>
  );
}