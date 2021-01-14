import React from 'react';
import PackageList from "./PackageList";
import PackageForm from "./PackageForm";
import PackageProvider from "../context/packageContext";
import { ApolloProvider } from '@apollo/client';
import Client from '../utils/api';

function PackageOrder() {
  return (
    <ApolloProvider client={Client}>
      <PackageProvider>
        <div id="package-order">
          <PackageList />
          <PackageForm formType="add" />
        </div>
      </PackageProvider>
    </ApolloProvider>
  );
}

export default PackageOrder;
