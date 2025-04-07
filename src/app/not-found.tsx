import { FC } from "react";
import Image from "next/image";
const NotFound: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-background">
      <div className="text-center p-8">
        <Image
          src="/kima.png"
          alt="404"
          width={200}
          height={200}
          className="w-full h-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nothing to see here yet
        </h1>
        <p className="text-lg text-gray-600">This page may be coming soon...</p>
      </div>
    </div>
  );
};

export default NotFound;
