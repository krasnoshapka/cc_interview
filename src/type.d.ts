interface IPackage {
  packageId: number;
  quantity: number;
  amount: number;
}

type PackageContextType = {
  packages: IPackage[],
  addPackage: (p: IPackage) => void,
  modifyPackage: (p: IPackage) => void
  loadPackages: (p: IPackage[]) => void
};
