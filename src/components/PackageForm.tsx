import React from 'react';
import {PackageContext} from '../context/packageContext'

export interface PackageFormProps extends React.ComponentPropsWithoutRef<"form"> {
  formType: 'add' | 'modify';
  p?: IPackage;
}

const PackageForm: React.FC<PackageFormProps> = ({formType, p, ...props}: PackageFormProps) => {
  const {addPackage, modifyPackage} = React.useContext(PackageContext) as PackageContextType;

  return (
    <form >
      Package form
    </form>
  );
}

export default PackageForm;