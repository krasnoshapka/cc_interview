import React from 'react';

export interface PackageListItemProps extends React.ComponentPropsWithoutRef<"li">, IPackage {
}

export const PackageListItem: React.FC<PackageListItemProps> = ({packageId, quantity, amount, ...props}: PackageListItemProps) => {
  return (
    <li className='package-list-item'>
      Package ({packageId})
    </li>
  );
}
