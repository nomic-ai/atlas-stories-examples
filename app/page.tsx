import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <header className="flex items-center justify-between mb-8 border-b border-neutral-400 pb-4">
        <div className="flex items-center gap-3">
          <Image 
            src="/nomic_dark_logo.webp" 
            alt="Nomic Logo" 
            width={40} 
            height={40} 
            className="rounded-md"
          />
          <h1 className="text-4xl font-bold m-0">Atlas Data Stories</h1>
        </div>
        <a 
          href="https://atlas.nomic.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm bg-primary-400 hover:bg-primary-600 text-white px-4 py-2 rounded-md transition-colors"
        >
          Visit Atlas
        </a>
      </header>

      <div className="mb-8 bg-neutral-300 p-6 rounded-lg border-l-4 border-primary-400">
        <h2 className="text-2xl mb-3">Welcome to the Atlas Data Stories Examples examples repository. </h2>
        <p className="text-lg">
          Atlas Data Stories allow you to create
          interactive, scrollable narratives with your data maps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Link href="/humans-of-wikipedia" className="card hover:border-primary-400">
          <h3 className="text-xl font-semibold mb-2">Humans of Wikipedia</h3>
          <p className="mb-4">
            Explore Wikipedia&apos;s people data, organized by similarity. See how athletes, 
            historical figures, and other notable people cluster together.
          </p>
          <div className="text-sm text-primary-400 font-medium">View example →</div>
        </Link>

        <Link href="/y-combinator" className="card hover:border-primary-400">
          <h3 className="text-xl font-semibold mb-2">Y Combinator Startups</h3>
          <p className="mb-4">
            Analyze Y Combinator startups to understand which ones succeed and why. 
            Visualize clusters of startups and discover patterns in failure and success.
          </p>
          <div className="text-sm text-primary-400 font-medium">View example →</div>
        </Link>
      </div>

      <div className="mt-12 bg-primary-200 rounded-lg">

        <div className="mb-6">
          <div>
            <strong className="text-primary-700">Documentation:</strong>
            <ul className="list-disc ml-6 mt-1">
              <li>
                <a 
                  href="https://docs.nomic.ai/atlas/data-maps/data-stories" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline text-primary-600 hover:text-primary-700"
                >
                  Atlas Stories Overview
                </a>
              </li>
              <li>
                <a 
                  href="https://docs.nomic.ai/atlas/data-maps/guides/create-your-own-atlas-data-story" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline text-primary-600 hover:text-primary-700"
                >
                  Create Your Own Atlas Data Story - Detailed Guide
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex gap-4 mt-6">
          <a 
            href="https://docs.nomic.ai/atlas/data-maps/data-stories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Read Documentation
          </a>
          <a 
            href="https://join.slack.com/t/nomic-community/shared_invite/zt-3173tk278-kPJgDFGyPukUKwTYz8RRZQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm bg-white hover:bg-neutral-300 text-primary-600 border border-primary-600 px-4 py-2 rounded-md transition-colors"
          >
            Join Nomic Community Slack
          </a>
        </div>
      </div>
    </div>
  );
}