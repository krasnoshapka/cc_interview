import React from 'react';
import {PackageListItem, PackageListItemProps} from "./PackageListItem";
import {PackageContext} from "../context/packageContext";

function PackageList() {
  const { packages, modifyPackage } = React.useContext(PackageContext) as PackageContextType;

  return (
    <ul id="package-list">
      {packages && packages.map((p) =>
        <PackageListItem key={p.packageId} {...p} />
      )}
    </ul>
  );
}

export default PackageList;
