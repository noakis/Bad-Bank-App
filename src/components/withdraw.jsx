import { useContext, useEffect, useState } from "react";
import { validationWithdraw } from "../utils/helper";
import { UserContext } from "./context";
import OperationsCard from "./OperationsCard";

export function Withdraw() {
  const { selectedUser, submitWithdraw } = useContext(UserContext);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amt = parseInt(e.target.amount.value);
    const valid = validationWithdraw(amt, selectedUser.balance);
    console.log(valid);
    if (valid) {
      submitWithdraw(amt);
      setSubmitted(true);
    }
  };

  return (
    <OperationsCard
      handleSubmit={handleSubmit}
      selectedUser={selectedUser}
      type="Withdraw"
      submitted={submitted}
      setSubmitted={setSubmitted}
    />
  );
}
