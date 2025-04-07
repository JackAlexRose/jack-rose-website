import Image from "next/image";
import Link from "next/link";

export default function WorkPage() {
  return (
    <main className="pt-24 pb-16 px-4 bg-[var(--background-secondary)] min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Work</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Link
            href="https://www.daisywaltonellispsychology.co.uk/"
            target="_blank"
            className="block rounded-lg overflow-hidden shadow-md h-full transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="h-[400px] relative">
              <Image
                src="/images/projects/daisy.png"
                alt="Featured Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 bg-yellow-500 min-h-[200px] flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-wider">
                  Daisy Walton-Ellis
                </h2>
                <p className="mt-2 text-sm tracking-wider">
                  Daisy is a highly specialised psychotherapist, ASD specialist
                  and an expert witness. We worked together to make sure her
                  website was accessible, covered each of her specialisms and
                  was easy to maintain.
                </p>
                <p className="mt-2 text-sm tracking-wider bg-white/20 p-2 rounded-md italic">
                  &quot;Jack created exactly what I wanted - a clean,
                  professional website that represents my practice perfectly.
                  &quot;
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="https://burpham-fc.vercel.app/"
            target="_blank"
            className="block rounded-lg overflow-hidden shadow-md h-full transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="h-[400px] relative">
              <Image
                src="/images/projects/burpham-fc.png"
                alt="Burpham Football Club"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 bg-red-500 min-h-[200px] flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-wider">
                  Burpham Football Club
                </h2>
                <p className="mt-2 text-sm tracking-wider">
                  Burpham Football Club is a local sports club that I created a
                  new website for. I worked with them to create a website that
                  has a modern look, with tables and a fixtures feature,
                  including all of their new social media content.
                </p>
                <p className="mt-2 text-sm tracking-wider bg-white/20 p-2 rounded-md">
                  <span className="italic">
                    &quot;The new website has transformed how we communicate
                    with our fans and manage our club information.&quot;
                  </span>{" "}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
