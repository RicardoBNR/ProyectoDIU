import CrudAdmin from "./crudadmin";
import Crud from "./crud";
import React, { Component } from "react";

const Account_Admin = () => {
  return (
    <>
      <div class="Crud">
        <div class="left2">
          <h4>Citas </h4>
        </div>
        <div class="right">
          <CrudAdmin />
        </div>
      </div>
      <div class="left2"></div>
    </>
  );
};
export default Account_Admin;
