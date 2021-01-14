import React from 'react';
import PackageList from "./PackageList";
import PackageForm from "./PackageForm";

function PackageOrder() {

  return (
    <div id="package-order">
      <PackageList />
      <PackageForm formType="add" />
    </div>
  );
}

export default PackageOrder;
