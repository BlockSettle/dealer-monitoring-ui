import React from "react";

const toThreePrecision = (value: string | number) => {
  return Math.round(Number(value) * 1000) / 1000;
};

export default function PositionTable(props: { data: any }) {
  const [Leverex, setLeverex] = React.useState<any>(props.data.positions.maker);
  const [Bitfinex, setBitfinex] = React.useState<any>(
    props.data.positions.taker
  );

  const lOrder = React.useCallback(() => {
    const positions = Bitfinex.positions[Bitfinex.product];
    return (
      positions?.[
        Object.getOwnPropertyNames(Bitfinex.positions[Bitfinex.product])[0]
      ].position ?? []
    );
  }, [Bitfinex]);

  const bOrder = React.useCallback(
    () => ({
      sessionIM: "",
      ...Leverex.orderData?.orders[
        Object.getOwnPropertyNames(Leverex.orderData.orders)[0]
      ],
    }),
    [Leverex]
  );

  React.useEffect(() => {
    setLeverex(props.data.positions.maker);
    setBitfinex(props.data.positions.taker);
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
                <tr>
                  <td>{Bitfinex.name}</td>
                  <td>{Bitfinex.netExposure}</td>
                  <td>{Bitfinex.openPrice}</td>
                  <td>{Bitfinex.product}</td>
                  <td>{lOrder().symbol ?? ""}</td>
                  <td>{lOrder().base_price ?? ""}</td>
                  <td>{lOrder().amount ?? ""}</td>
                  <td>{lOrder().margin_funding} ?? ''</td>
                  <td>{toThreePrecision(lOrder().profit_loss ?? "")}</td>
                  <td>{toThreePrecision(lOrder().liquidation_price ?? "")}</td>
                  <td>{toThreePrecision(lOrder().leverage ?? "")}</td>
                  <td>{toThreePrecision(lOrder().collateral ?? "")}</td>
                </tr>
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
                <tr key={Leverex}>
                  <td>{Leverex.name}</td>
                  <td>{Leverex.netExposure}</td>
                  <td>{Leverex.openPrice}</td>
                  <td>{Leverex.indexPrice}</td>
                  <td>{bOrder().sessionIM ? bOrder().sessionIM : ""}</td>
                  <td>{bOrder()._fee}</td>
                  <td>{bOrder()._product_type}</td>
                  <td>{bOrder()._quantity}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
