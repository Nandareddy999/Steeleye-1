import React from "react";
import List from "./List";
export default {
  title: "Components/List",
  component: List,
};

export const Default = () => (
  <List
    rows={[
      {
        "&id": "1",
        executionDetails: { buySellIndicator: "Buy", orderStatus: "Pending" },
        timestamps: { orderSubmitted: "2023-08-04 12:34:56" },
        bestExecutionData: { orderVolume: { USD: "$100" } },
      },
      {
        "&id": "2",
        executionDetails: { buySellIndicator: "Sell", orderStatus: "Completed" },
        timestamps: { orderSubmitted: "2023-08-03 10:15:30" },
        bestExecutionData: { orderVolume: { USD: "$150" } },
      }, 
      {
        "&id" : "3",
        executionDetails : { buySellIndicator : "Buy" , orderStatus : "Pending" },
        timestamps : { orderSubmitted : "2023-08-04 12:15:12" },
        bestExecutionData : { orderVolume : { USD : "$200" } },
      }
    ]}
    currencyType="USD"
    searchText=""
    setSelectedOrderDetails={() => {}}
    setSelectedOrderTimeStamps={() => {}}
  />
);
