import { createContext, useCallback, useMemo, useState } from "react";

export const UserContext = createContext(null);

export const UserContextWrapper = ({ children }) => {
  const [users, setUsers] = useState([
    {
      name: "noa",
      email: "dev.noakis@gmail.com",
      password: "secret",
      balance: 0,
      selected: true,
      transactions: [],
    },
  ]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const setSelectedUser = (index) => {
    const newUsers = users.map((user, i) => {
      if (i === index) {
        return { ...user, selected: true };
      } else {
        return { ...user, selected: false };
      }
    });
    setUsers(newUsers);
  };

  const selectedUser = useMemo(() => {
    return users.find((user) => user.selected);
  }, [users]);

  const submitDeposit = useCallback(
    (amount) => {
      const newUsers = users.map((user) => {
        if (user.selected) {
          return {
            ...user,
            balance: parseInt(user.balance) + parseInt(amount),
          };
        } else {
          return user;
        }
      });
      setUsers(newUsers);
    },
    [users]
  );

  const submitWithdraw = useCallback(
    (amount) => {
      const newUsers = users.map((user) => {
        if (user.selected) {
          if (parseInt(user.balance) - parseInt(amount) < 0) {
            alert("Insufficient funds");
            return user;
          } else {
            return {
              ...user,
              balance: parseInt(user.balance) - parseInt(amount),
            };
          }
        } else {
          return user;
        }
      });
      setUsers(newUsers);
    },
    [users]
  );

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        setSelectedUser,
        selectedUser,
        submitDeposit,
        submitWithdraw,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
