import React from 'react';
import {PackageListItem, PackageListItemProps} from "./PackageListItem";

function PackageList() {
  const items: Array<PackageListItemProps> = [
    {
      packageId: 1,
      amount: 10,
      quantity: 1
    }
  ]

  return (
    <ul id="package-list">
      {items && items.map((p) =>
        <PackageListItem key={p.packageId} {...p} />
      )}
    </ul>
  );
}

export default PackageList;
