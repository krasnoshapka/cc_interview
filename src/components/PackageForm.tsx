import React from 'react';
import PackageModel from "../utils/PackageModel";

type formType = 'add' | 'modify';

export interface PackageFormProps extends React.ComponentPropsWithoutRef<"form"> {
  formType: formType;
  packageModel?: PackageModel | null;
}

const PackageForm: React.FC<PackageFormProps> = ({formType, packageModel = null, ...props}: PackageFormProps) => {
  return (
    <form >
      Package form
    </form>
  );
}

export default PackageForm;