import React from "react";

export const PackageContext = React.createContext<PackageContextType | null>(null);

const PackageProvider: React.FC<React.ReactNode> = ({ children}) => {
  const [packages, setPackages] = React.useState<IPackage[]>([
    {
      packageId: 1,
      amount: 10,
      quantity: 1
    }
  ]);

  const addPackage = (p: IPackage) => {
    setPackages([...packages, p]);
  };

  const modifyPackage = (p: IPackage) => {
    setPackages([...packages, p]);
  };

  return (
    <PackageContext.Provider value={{ packages, addPackage, modifyPackage }}>
      {children}
    </PackageContext.Provider>
  );
}

export default PackageProvider;
