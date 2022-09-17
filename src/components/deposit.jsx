import { useContext, useEffect, useState } from "react";
import { validationDepositAmount } from "../utils/helper";
import { UserContext } from "./context";
import OperationsCard from "./OperationsCard";

export function Deposit() {
  const { selectedUser, submitDeposit } = useContext(UserContext);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amt = parseInt(e.target.amount.value);
    const valid = validationDepositAmount(amt);
    if (valid) {
      submitDeposit(amt);
      setSubmitted(true);
    }
  };

  return (
    <OperationsCard
      handleSubmit={handleSubmit}
      selectedUser={selectedUser}
      type="Deposit"
      submitted={submitted}
      setSubmitted={setSubmitted}
    />
  );
}
