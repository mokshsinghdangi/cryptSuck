import React, { useRef, useState } from "react";
import * as nearAPI from "near-api-js";
import { login } from "../utils";

const Money = () => {
  // Input fields
  const recipientField = useRef("");
  const nearField = useRef("");
  const detailsField = useRef("");

  // Display warning or not

  const [warning, setWarning] = useState("none");

  // Submit fuction

  const submitBtn = async () => {
    let checkRecipient = recipientField.current.value.match("[A-Za-z0-9]");
    let checkNEAR = nearField.current.value.match("[0-9]");
    let checkDetails = detailsField.current.value.match("[A-Za-z0-9]");

    // Check if all field are filled

    if ((checkRecipient === null, checkNEAR === null, checkDetails === null)) {
      alert("Fields are empty");
    } else {
      console.log("Recipient");

      // Show warning

      setWarning("block");

      // Send NEAR

      await window.contract.sendMoney({
        account: recipientField.current.value,
        amount: nearAPI.utils.format.parseNearAmount(nearField.current.value),
      });

      // Save transaction

      await window.contract.addTransaction({
        reciever: recipientField.current.value,
        details: detailsField.current.value,
        value: nearField.current.value,
      });

      alert("Money Sent!");

      setWarning("none");
    }
  };

  return (
    <>
      <div className="form" id="money-transfer">
        <div className="send-money">
          <h1 className="send-head">Send Near</h1>
          <div className="money-form">
            <label htmlFor="recipient">Recipient</label>
            <input
              type="text"
              id="recipient"
              ref={recipientField}
              placeholder="example.testnet"
              required
            />
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              ref={nearField}
              placeholder="Enter NEAR value."
              required
            />
            <label htmlFor="details">Details</label>
            <textarea
              id="details"
              rows="5"
              ref={detailsField}
              placeholder="Add details of the transaction."
              required
            ></textarea>
            <p className="warning" style={{ display: `${warning}` }}>
              Please wait for a moment and don't click button twice, it will
              take very little time.
            </p>
            <button className="send-btn" onClick={submitBtn}>
              Send
            </button>
          </div>
          <div
            className="allow-transfer"
            style={{
              display: `${
                window.walletConnection.isSignedIn() ? "none" : "flex"
              }`,
            }}
          >
            Please connect to your Near wallet to send money.
            <button className="connect-btn" onClick={login}>
              Connect to Wallet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Money;
