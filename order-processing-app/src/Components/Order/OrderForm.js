import React, { useState, useEffect } from "react";
import Form from "../../Layouts/Form";
import {
  ButtonGroup,
  Grid,
  InputAdornment,
  makeStyles,
  Button as MuiButton,
} from "@material-ui/core";
import { Input, Select, Button } from "../../Controls/index.js";
import ReplayIcon from "@material-ui/icons/Replay";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import ReorderIcon from "@material-ui/icons/Reorder";
import { createAPIEndpoint, ENDPIONTS } from "../../API/index.js";

const pMethods = [
  { id: "none", title: "Select" },
  { id: "Cash", title: "Cash" },
  { id: "Card", title: "Card" },
];

const useStyles = makeStyles((theme) => ({
  adornmentText: {
    "& .MuiTypography-root": {
      color: "#f3b33d",
      fontWeight: "bolder",
      fontSize: "1.5em",
    },
  },
  submitButtonGroup: {
    backgroundColor: "#f3b33d",
    color: "#000",
    margin: theme.spacing(1),
    "& .MuiButton-label": {
      textTransform: "none",
    },
    "&:hover": {
      backgroundColor: "#f3b33d",
    },
  },
}));

export default function OrderForm(props) {
  const { values, errors, handleInputChange } = props;
  const classes = useStyles();
  const [customerList, setCustomerList] = useState([]);
  useEffect(() => {
    createAPIEndpoint(ENDPIONTS.CUSTOMER)
      .fetchAll()
      .then((res) => {
        let customerList = res.data.map((item) => ({
          id: item.customerId,
          title: item.customerName,
        }));
        customerList = [{ id: 0, title: "Select" }].concat(customerList);
        setCustomerList(customerList);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Input
            disabled="true"
            label="Order Number"
            name="orderNumber"
            value={values.orderNumber}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  className={classes.adornmentText}
                  position="start"
                >
                  #
                </InputAdornment>
              ),
            }}
          ></Input>
          <Select
            label="Customer"
            name="customerId"
            options={customerList}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={6}>
          <Select
            label="Payment Method"
            name="pMethod"
            options={pMethods}
            value={values.pMethod}
            onChange={handleInputChange}
          />
          <Input
            disabled="true"
            label="Grand Total"
            name="gTotal"
            value={values.gTotal}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  className={classes.adornmentText}
                >
                  $
                </InputAdornment>
              ),
            }}
          ></Input>
          <ButtonGroup className={classes.submitButtonGroup}>
            <MuiButton
              size="large"
              type="submit"
              endIcon={<RestaurantMenuIcon />}
            >
              Submit
            </MuiButton>
            <MuiButton size="small" endIcon={<ReplayIcon />}></MuiButton>
          </ButtonGroup>
          <Button size="large" startIcon={<ReorderIcon></ReorderIcon>}>
            Orders
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
}
