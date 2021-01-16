interface IPackage {
  packageId: number;
  quantity: number;
  amount: number;
}

type PackageContextType = {
  packages: IPackage[],
  loadPackages: (p: IPackage[]) => void
};
