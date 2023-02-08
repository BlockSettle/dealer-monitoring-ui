import React from "react";

const toThreePrecision = (value: string | number) => {
  return Math.round(Number(value) * 1000) / 1000;
};

export default function PositionTable(props: { data: any[] }) {
  const [Leverex, setLeverex] = React.useState<any[]>([]);
  const [Bitfinex, setBitfinex] = React.useState<any[]>([]);

  React.useEffect(() => {
    setLeverex(props.data.map((_data) => _data.positions.maker));
    setBitfinex(props.data.map((_data) => _data.positions.taker));
  }, [props]);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "15px",
          width: "100%",
          overflow: "auto",
        }}
      >
        <div style={{ width: "50%", overflow: "hidden" }}>
          <h3>Bitfinex Position</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>netExposure</th>
                  <th>OpenPrice</th>
                  <th>Product</th>
                  <th>Symbol</th>
                  <th>Base Price</th>
                  <th>Amount</th>
                  <th>Margin funding</th>
                  <th>Profit loss</th>
                  <th>Liquidation price</th>
                  <th>Leverage</th>
                  <th>Collateral</th>
                </tr>
              </thead>
              <tbody>
                {Bitfinex.map((_item, index) => {
                  const order =
                    _item.positions[_item.product][
                      Object.getOwnPropertyNames(
                        _item.positions[_item.product]
                      )[0]
                    ].position;
                  return (
                    <tr key={index}>
                      <td>{_item.name}</td>
                      <td>{_item.netExposure}</td>
                      <td>{_item.openPrice}</td>
                      <td>{_item.product}</td>
                      <td>{order.symbol}</td>
                      <td>{order.base_price}</td>
                      <td>{order.amount}</td>
                      <td>{order.margin_funding}</td>
                      <td>{toThreePrecision(order.profit_loss)}</td>
                      <td>{order.liquidation_price}</td>
                      <td>{toThreePrecision(order.leverage)}</td>
                      <td>{toThreePrecision(order.collateral)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ width: "50%", overflow: "hidden" }}>
          <h3>Leverex Position</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>netExposure</th>
                  <th>openPrice</th>
                  <th>indexPrice</th>
                  <th>sessionIM</th>
                  <th>fee</th>
                  <th>_product_type</th>
                  <th>quantity</th>
                </tr>
              </thead>
              <tbody>
                {Leverex.map((_item, index) => {
                  const order = {
                    sessionIM: "",
                    ..._item.orderData.orders[
                      Object.getOwnPropertyNames(_item.orderData.orders)[0]
                    ],
                  };
                  return (
                    <tr key={index}>
                      <td>{_item.name}</td>
                      <td>{_item.netExposure}</td>
                      <td>{_item.openPrice}</td>
                      <td>{_item.indexPrice}</td>
                      <td>{order.sessionIM ? order.sessionIM : ""}</td>
                      <td>{order._fee}</td>
                      <td>{order._product_type}</td>
                      <td>{order._quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
