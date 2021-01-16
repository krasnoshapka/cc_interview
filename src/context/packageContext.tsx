import React from "react";

export const PackageContext = React.createContext<PackageContextType | null>(null);

const PackageProvider: React.FC<React.ReactNode> = ({ children}) => {
  const [packages, setPackages] = React.useState<IPackage[]>([]);

  const loadPackages = (packages: IPackage[]) => {
    setPackages(packages);
  };

  return (
    <PackageContext.Provider value={{ packages, loadPackages }}>
      {children}
    </PackageContext.Provider>
  );
}

export default PackageProvider;
