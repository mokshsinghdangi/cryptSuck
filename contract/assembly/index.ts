import {Context, logging, PersistentMap, u128, ContractPromiseBatch} from "near-sdk-as";

const Transaction = new PersistentMap<string,string[]>("transaction");

// Changing Function

export function addTransaction(reciever:string, value:string, details:string ):void{
  logging.log("adding transactions")
  if (Transaction.contains(Context.sender)) {
    let sender = Transaction.getSome(Context.sender)
    sender.push(details + ` | to ${reciever} for ${value}`)
    Transaction.set(Context.sender, sender)
  }else{
    Transaction.set(Context.sender, [details + ` | to ${reciever} for ${value}`])
  }
}

// Send Money

export function sendMoney(account:string, amount:u128,):void{
  ContractPromiseBatch.create(account).transfer(amount)
  logging.log("Money sended successfully to"+ account)
}

// View Method

export function getTransaction(user:string):string[]{
  if (Transaction.contains(user)) {
    return Transaction.getSome(user)
  } else {
    logging.log("No transaction records for this account.")
    return []
  }
}