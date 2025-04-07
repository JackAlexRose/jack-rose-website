import { Bubbles } from "./Bubbles";

export const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center pt-16 overflow-hidden gradient-background">
      <Bubbles />
      <div className="container mx-auto px-4 relative z-[2]">
        <div className="relative font-[family-name:var(--font-inter)]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-none mb-8">
            <span className="bg-gradient-to-r from-red-500 to-red-400">
              Jack Rose
            </span>
          </h1>
          <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-none">
            <span className="block">Creative</span>
            <span className="block md:pl-24 lg:pl-48 xl:pl-64">
              Software Engineering
            </span>
            <span className="block md:pl-48 lg:pl-96 xl:pl-[30rem]">
              <span className="bg-gradient-to-r from-red-500 to-red-400">
                & Other{" "}
              </span>{" "}
              Oxymorons
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};
