import React from 'react';
import {PackageContext} from '../context/packageContext';
import {useAddPackageToCartMutation, useUpdatePackageInCartMutation} from '../utils/api';

export interface PackageFormProps extends React.ComponentPropsWithoutRef<"form"> {
  formType: 'add' | 'modify';
  p?: IPackage;
}

const defaultPackage = {
  packageId: 0,
  quantity: 1,
  amount: 5
};

const PackageForm: React.FC<PackageFormProps> = ({formType, p = defaultPackage, ...props}: PackageFormProps) => {
  const {packages, loadPackages} = React.useContext(PackageContext) as PackageContextType;
  const [formData, setFormData] = React.useState(p);
  const {addPackageToCart} = useAddPackageToCartMutation();
  const {updatePackageInCart} = useUpdatePackageInCartMutation();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value
    });
  };

  const handleSavePackage = (e: React.FormEvent, formData: IPackage | any) => {
    e.preventDefault();
    // TODO: implement better form data validation here
    const newP: IPackage = {
      packageId: formData.packageId,
      amount: parseInt(formData.amount),
      quantity: parseInt(formData.quantity)
    }

    if (formType === 'add') {
      addPackageToCart(newP).then((packages) => {
        loadPackages(packages);
        setFormData(defaultPackage);
      });
    } else {
      updatePackageInCart(newP).then((packages) => {
        loadPackages(packages);
      });
    }
  }

  return (
    <React.Fragment>
      {formType === 'add' && (<h2>Package {packages.length + 1}</h2>)}
      <form onSubmit={(e) => handleSavePackage(e, formData)} className="package-form">
        <div className="row">
          <div className="column">
            <label htmlFor='quantity'>Quantity:</label>
            <input id="quantity" type="number" min="1" max="10" value={formData.quantity} onChange={handleForm} />
          </div>
          <div className="column">
            <label htmlFor='amount'>Amount (€):</label>
            <input id="amount" type="number" min="5" max="150" value={Math.round(formData.amount)} onChange={handleForm} />
          </div>
          <div className="column">
            <button>
              {formType === 'add' ? 'Add' : 'Save'} Package
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default PackageForm;