import React from "react";
import OrderForm from "./OrderForm";
import { useForm } from "../../hooks/useForm";
import OrderedFoodItems from "./OrderedFoodItems";
import { Grid } from "@material-ui/core";
import SearchFoodItems from "../Order/SearchFoodItem";

const generateOrderNumber = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

const getFreshModelObject = () => ({
  orderMasterId: 0,
  orderNumber: generateOrderNumber(),
  customerId: 0,
  pMethod: "none",
  gTotal: 0,
  deletedOrderItemIds: "",
  orderDetails: [],
});
export default function Order() {
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetFormControls,
  } = useForm(getFreshModelObject);

  return (
    <Grid container>
      <Grid item xs={12}>
        <OrderForm {...{ values, errors, handleInputChange }}></OrderForm>
      </Grid>
      <Grid item xs={6}>
        <SearchFoodItems></SearchFoodItems>
      </Grid>
      <Grid item xs={6}>
        <OrderedFoodItems></OrderedFoodItems>
      </Grid>
    </Grid>
  );
}
