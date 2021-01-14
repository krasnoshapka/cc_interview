import React from "react";

export const PackageContext = React.createContext<PackageContextType | null>(null);

const PackageProvider: React.FC<React.ReactNode> = ({ children}) => {
  const [packages, setPackages] = React.useState<IPackage[]>([]);

  const addPackage = (p: IPackage) => {
    p.packageId = packages.length;
    setPackages([...packages, p]);
  };

  const modifyPackage = (p: IPackage) => {
    const newPackages = [...packages];
    newPackages[p.packageId] = p;
    setPackages(newPackages);
  };

  return (
    <PackageContext.Provider value={{ packages, addPackage, modifyPackage }}>
      {children}
    </PackageContext.Provider>
  );
}

export default PackageProvider;
