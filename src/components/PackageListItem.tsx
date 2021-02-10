import React from 'react';
import PackageForm from "./PackageForm";

export interface PackageListItemProps extends React.ComponentPropsWithoutRef<"div"> {
  p: IPackage;
  index: number;
}

export const PackageListItem: React.FC<PackageListItemProps> = ({p, index, ...props}: PackageListItemProps) => {
  return (
    <div className='package-list-item'>
      <div className='package-list-item__details row'>
        <div className="package-list-item__title column">Package {index + 1}</div>
        <div className="package-list-item__quantity column">Quantity: {p.quantity}</div>
        <div className="package-list-item__amount column">Amount: € {p.amount}</div>
      </div>
      <div className="package-list-item__modify row">
        <input type="checkbox" className="package-list-item__input" id={`modify-${index}`} />
        <label htmlFor={`modify-${index}`} className="package-list-item__label">Modify</label>
        <PackageForm formType="modify" p={p} />
      </div>
    </div>
  );
}
