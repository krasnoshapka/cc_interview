import React from 'react';
import {PackageListItem} from "./PackageListItem";
import {PackageContext} from "../context/packageContext";
import {useCartQuery} from "../utils/api";

function PackageList() {
  const {packages} = React.useContext(PackageContext) as PackageContextType;
  const {loading, error} = useCartQuery();

  // TODO: handle query errors here
  return (
    <div id="package-list">
      {loading && 'Loading...'}
      {packages && packages.map((p) =>
        <PackageListItem key={p.packageId} p={p} />
      )}
    </div>
  );
};

export default PackageList;
