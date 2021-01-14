import React from 'react';
import {PackageListItem} from "./PackageListItem";
import {PackageContext} from "../context/packageContext";

function PackageList() {
  const { packages, modifyPackage } = React.useContext(PackageContext) as PackageContextType;

  return (
    <div id="package-list">
      {packages && packages.map((p) =>
        <PackageListItem key={p.packageId} p={p} />
      )}
    </div>
  );
}

export default PackageList;
