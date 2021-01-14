import React from 'react';
import PackageModel from "../utils/PackageModel";

export interface PackageListItemProps extends React.ComponentPropsWithoutRef<"li">, PackageModel {
}

export const PackageListItem: React.FC<PackageListItemProps> = ({packageId, quantity, amount, ...props}: PackageListItemProps) => {
  return (
    <li className='package-list-item'>
      Item ({packageId})
    </li>
  );
}
