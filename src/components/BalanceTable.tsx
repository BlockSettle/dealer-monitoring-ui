import React from "react";

const toThreePrecision = (value: string | number) => {
  return Math.round(Number(value) * 1000) / 1000;
};

export default function BalanceTable(props: { data: any }) {
  const [Leverex, setLeverex] = React.useState<any>(props.data.balances.maker);
  const [Bitfinex, setBitfinex] = React.useState<any>(
    props.data.balances.taker
  );

  React.useEffect(() => {
    setLeverex(props.data.balances.maker);
    setBitfinex(props.data.balances.taker);
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
                <tr>
                  <td>
                    {Bitfinex.balances.margin &&
                      toThreePrecision(
                        Bitfinex.balances.margin.TESTUSDTF0.total
                      )}
                  </td>
                  <td>
                    {Bitfinex.balances.margin &&
                      toThreePrecision(
                        Bitfinex.balances.margin.TESTUSDTF0.free
                      )}
                  </td>
                  <td>
                    {Bitfinex.balances.margin &&
                      toThreePrecision(
                        Bitfinex.balances.margin.TESTUSDTF0.reserved
                      )}
                  </td>
                  <td>{JSON.stringify(Bitfinex.ccy)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ width: "50%", overflow: "hidden" }}>
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
                <tr>
                  <td>{new Date(Leverex._timestamp).toUTCString()}</td>
                  <td>{toThreePrecision(Leverex.balances.USDT)}</td>
                  <td>{toThreePrecision(Leverex.balances.USDP)}</td>
                  <td>{Leverex.ccy}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
