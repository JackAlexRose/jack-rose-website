import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
}

export const SelectedWorks = () => {
  const projects: Project[] = [
    {
      id: "daisy",
      title: "Daisy Walton-Ellis",
      category: "Psychotherapist website",
      image: "/images/projects/daisy.png",
      link: "/work/daisy",
    },
    {
      id: "burpham",
      title: "Burpham FC",
      category: "Local football club website",
      image: "/images/projects/burpham-fc.png",
      link: "/work/burpham-fc",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[var(--background-secondary)]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-4">
          Projects I
          <br />
          am{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-400">
            proud
          </span>{" "}
          of
        </h2>
        <div className="relative">
          <div className="absolute bottom-0 right-0 md:right-10">
            <Image
              src="/my-body.png"
              alt="Small decorative illustration"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <hr className="my-8" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="uppercase text-lg font-medium tracking-wide">
              PROJECTS
            </p>
          </div>

          <div className="self-center">
            <p className="text-lg max-w-xl">
              I&apos;m a fullstack engineer who just wants to collaborate with
              good people and organisations to build beautiful, functional
              websites and applications that we can both be proud of.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="transform transition-all duration-300 hover:-translate-y-2.5"
            >
              <Link href={project.link} className="block">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
                <p className="text-sm mt-1">{project.category}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
