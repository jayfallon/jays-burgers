import React, { Component } from "react";
import Aux from "../../../Hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  // this could be a function comp instead
  componentDidUpdate() {
    // console.log("order summary will updadte");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {this.props.ingredients[igKey]}
      </li>
    ));
    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total price:</strong> {this.props.price}
        </p>
        <p>Continue to checkout?</p>
        <Button clicked={this.props.purchaseCancelled} btnType={"Danger"}>
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinued} btnType={"Success"}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
