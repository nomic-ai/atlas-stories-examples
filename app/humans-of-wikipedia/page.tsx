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
        <b>Humans of Wikipedia</b>
        <Scrollyteller map="nomic/wiki-people/map/c0551f2f-b449-46dd-92ed-3e4fd17e08e1">
          <Folio zoom={{ x: [-50, 50], y: [-50, 50] }}>
            This map is made of people. Each dot is a person, and the people are
            organized by similarity. It's like soylent green but with more
            famousness.
          </Folio>

          <Folio hash="bwzI">
            The biggest level of organization is about occupation.
          </Folio>

          <Folio hash="t32w" zoom={{ x: [-50, 50], y: [-50, 50] }}>
            Wikipedia *loves* sports. Athletes are about 50% of all people in
            Wikipedia, and occupy the entire bottom of the map.
          </Folio>

          <Folio hash="eXxy" zoom={{ x: [-18, 52], y: [5, 52] }}>
            About one in seven of the people on Wikipedia play soccer *alone*.
            Among soccer players, the sub-organization is by country.
          </Folio>

          <Folio hash="Cofv" zoom={{ x: [-32, 45], y: [-47, 32] }}>
            But categories aren't perfect -- we can't distinguish in the
            occupational categories between players of **American** football (
            where athletes compete not to kick a ball but to see who can take the
            most traumatic brain injuries for the team ) and players of soccer
            football.
          </Folio>

          <Folio hash="lnWe" zoom={{ x: [-32, 45], y: [-47, 32] }} duration={300}>
            This is a case where Atlas's semantic filters can help. Let's embed
            everything by vector similarity to a sentence about American football.
            <br/>{'>'} A player of football who runs up and down the gridiron with the
            pigskin. Hike! Like Tom Brady. <br/>The red dots are the most similar, and
            the yellow the least.
          </Folio>

          <Folio hash="iQBh" zoom={{ x: [-32, 45], y: [-47, 32] }} duration={300}>
            Conversely, comparing to the sentence:
            <br/>{'>'} A player of football who kicks and scores, drawing penalties and
            red cards like Cristiano Ronaldo or Lionel Messi. <br/>We get almost
            opposte results.
          </Folio>

          <Folio hash="mnJh" zoom={{ x: [-40, 45], y: [-47, 42] }}>
            We can position by those two axes -- the "American" axis on the x axis
            and the "Soccer" axis on the y -- to use these arbitrary sentences to
            partition between the two sports. The farther to the right is US
            football; to the top is soccer. The green to the lower right in this
            vector space are the Americans once again. The partition is clean, but
            not completely clear; some people fall in between.
          </Folio>

          <Folio hash="jbcl" zoom={{ x: [-5, 10], y: [-20, -15] }}>
            You don't need embeddings to take advantage of Atlas's powerful
            filters! Look at Europe, colored by region.
          </Folio>

          <Folio hash="rxzQ" zoom={{ x: [-5, 10], y: [-20, -15] }}>
            Let's color by people born since 1945. You can clearly see the nations
            of Europe.
          </Folio>

          <Folio hash="Vtu2" zoom={{ x: [-5, 10], y: [-20, -15] }}>
            Let's color by people born between 1870 and 1945. These are the old
            borders, with the German empire and fuzzier nationalities in Eastern
            Europe.
          </Folio>

          <Folio hash="t6J0" zoom={{ x: [-5, 10], y: [-20, -15] }}>
            When you move to where the people die, the definition increases.
          </Folio>
        </Scrollyteller>
      </div>
    </div>
  );
}