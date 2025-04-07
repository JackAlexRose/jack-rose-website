import { FC } from "react";

const NotFound: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-background">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nothing to see here yet
        </h1>
        <p className="text-lg text-gray-600">This page may be coming soon...</p>
      </div>
    </div>
  );
};

export default NotFound;
