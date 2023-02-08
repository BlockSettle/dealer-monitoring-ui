import React from "react";

const toThreePrecision = (value: string | number) => {
  return Math.round(Number(value) * 1000) / 1000;
};

export default function BalanceTable(props: { data: any[] }) {
  const [Leverex, setLeverex] = React.useState<any[]>([]);
  const [Bitfinex, setBitfinex] = React.useState<any[]>([]);

  React.useEffect(() => {
    setLeverex(props.data.map((_data) => _data.balances.maker));
    setBitfinex(props.data.map((_data) => _data.balances.taker));
  }, [props]);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "15px",
          maxWidth: "100%",
        }}
      >
        <div style={{ maxWidth: "50%" }}>
          <h3>Bitfinex Balance</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Total</th>
                  <th>Free</th>
                  <th>Reserved</th>
                  <th>ccy(s)</th>
                </tr>
              </thead>
              <tbody>
                {Bitfinex.map((_item, index) => (
                  <tr key={index}>
                    <td>
                      {_item.balances.margin &&
                        toThreePrecision(
                          _item.balances.margin.TESTUSDTF0.total
                        )}
                    </td>
                    <td>
                      {_item.balances.margin &&
                        toThreePrecision(_item.balances.margin.TESTUSDTF0.free)}
                    </td>
                    <td>
                      {_item.balances.margin &&
                        toThreePrecision(
                          _item.balances.margin.TESTUSDTF0.reserved
                        )}
                    </td>
                    <td>{JSON.stringify(_item.ccy)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3>Leverex Balance</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>TimeStamp</th>
                  <th>USDT</th>
                  <th>USDP</th>
                  <th>ccy</th>
                </tr>
              </thead>
              <tbody>
                {Leverex.map((_item, index) => (
                  <tr key={index}>
                    <td>{new Date(_item._timestamp).toUTCString()}</td>
                    <td>{toThreePrecision(_item.balances.USDT)}</td>
                    <td>{toThreePrecision(_item.balances.USDP)}</td>
                    <td>{_item.ccy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
