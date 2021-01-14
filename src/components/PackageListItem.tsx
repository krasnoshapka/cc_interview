import React from 'react';
import PackageForm from "./PackageForm";

export interface PackageListItemProps extends React.ComponentPropsWithoutRef<"div"> {
  p: IPackage
}

export const PackageListItem: React.FC<PackageListItemProps> = ({p, ...props}: PackageListItemProps) => {
  return (
    <div className='package-list-item'>
      <h3>Package ({p.packageId + 1})</h3>
      <div className="package-quantity">Quantity: {p.quantity}</div>
      <div className="package-amount">Amount: {p.amount}</div>
      <div>Show More...</div>
      <div>
        Modify
        <PackageForm formType="modify" p={p} />
      </div>
    </div>
  );
}
