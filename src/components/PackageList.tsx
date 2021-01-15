import React from 'react';
import {PackageListItem} from "./PackageListItem";
import {PackageContext} from "../context/packageContext";
import {useCartQuery} from "../utils/api";

function PackageList() {
  const {packages} = React.useContext(PackageContext) as PackageContextType;
  const {loading, error} = useCartQuery();
  // TODO: handle and display query errors here

  return (
    <div className="package-list">
      {loading && (<div className="loading">Loading packages...</div>)}
      {packages && packages.map((p, index) =>
        <PackageListItem key={p.packageId} p={p} index={index} />
      )}
    </div>
  );
};

export default PackageList;
