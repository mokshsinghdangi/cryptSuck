import React, { useState, useEffect } from "react";

const Transaction = () => {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    const getTransaction = async () => {
      let userTransaction = await window.contract.getTransaction({
        user: window.accountId,
      });

      setTransaction(userTransaction);
    };

    getTransaction();
  }, []);

  return (
    <>
      <div className="transaction-section">
        {window.walletConnection.isSignedIn() ? (
          <div className="transaction-list">
            {transaction.map((l, i) => {
              return (
                <div key={i} className="transaction-container">
                  <h1 className="title">Transaction #{i}</h1>
                  <div className="transaction-body">{l}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="signIn">Please Sign In</div>
        )}
      </div>
    </>
  );
};

export default Transaction;
