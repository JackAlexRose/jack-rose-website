import Image from "next/image";
import Link from "next/link";
import { DecorativeIllustration } from "./DecorativeIllustration";
interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
}

export const SelectedWorks = () => {
  const projects: Project[] = [
    {
      id: "daisy",
      title: "Daisy Walton-Ellis",
      category: "Psychotherapist website",
      image: "/images/projects/daisy.png",
      link: "/work",
      testimonial: {
        quote:
          "Jack created exactly what I wanted - a clean, professional website that represents my practice perfectly.",
        author: "Daisy Walton-Ellis",
        role: "Psychotherapist",
      },
    },
    {
      id: "burpham",
      title: "Burpham FC",
      category: "Local football club website",
      image: "/images/projects/burpham-fc.png",
      link: "/work",
      testimonial: {
        quote:
          "The new website has transformed how we communicate with our fans and manage our club information.",
        author: "Dave Mudge",
        role: "Club Secretary",
      },
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
          <DecorativeIllustration />
          <hr className="my-8" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="uppercase text-lg font-medium tracking-wide">
              MY WORK
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
              className="transform transition-all duration-300 hover:-translate-y-2.5 relative group"
            >
              <Link href={project.link} className="block">
                <div className="overflow-hidden rounded-lg relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.testimonial && (
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center">
                      <p className="text-white text-lg italic mb-4">
                        &ldquo;{project.testimonial.quote}&rdquo;
                      </p>
                      <div className="text-white">
                        <p className="font-semibold">
                          {project.testimonial.author}
                        </p>
                        {project.testimonial.role && (
                          <p className="text-sm text-gray-300">
                            {project.testimonial.role}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
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
