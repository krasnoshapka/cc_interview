import React from 'react';
import PackageForm from "./PackageForm";

export interface PackageListItemProps extends React.ComponentPropsWithoutRef<"div"> {
  p: IPackage;
  index: number;
}

export const PackageListItem: React.FC<PackageListItemProps> = ({p, index, ...props}: PackageListItemProps) => {
  return (
    <div className='package-list-item'>
      <div className='package-details'>
        <div className="package-title">Package {index + 1}</div>
        <div className="package-quantity">Quantity: {p.quantity}</div>
        <div className="package-amount">Amount: € {p.amount}</div>
      </div>
      <div className="package-modify">
        <b>Modify</b>
        <PackageForm formType="modify" p={p} />
      </div>
    </div>
  );
}
