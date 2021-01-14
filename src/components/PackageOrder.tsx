import React from 'react';
import PackageList from "./PackageList";
import PackageForm from "./PackageForm";
import PackageProvider from "../context/packageContext";

function PackageOrder() {
  return (
    <PackageProvider>
      <div id="package-order">
        <PackageList />
        <PackageForm formType="add" />
      </div>
    </PackageProvider>
  );
}

export default PackageOrder;
