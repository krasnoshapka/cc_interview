import React from "react";

export const PackageContext = React.createContext<PackageContextType | null>(null);

const PackageProvider: React.FC<React.ReactNode> = ({ children}) => {
  const [packages, setPackages] = React.useState<IPackage[]>([]);

  const modifyPackage = (p: IPackage) => {
    const newPackages = [...packages];
    const index: number = newPackages.findIndex((item) => item.packageId === p.packageId );
    newPackages[index] = p;
    setPackages(newPackages);
  };

  const loadPackages = (packages: IPackage[]) => {
    setPackages(packages);
  };

  return (
    <PackageContext.Provider value={{ packages, modifyPackage, loadPackages }}>
      {children}
    </PackageContext.Provider>
  );
}

export default PackageProvider;
