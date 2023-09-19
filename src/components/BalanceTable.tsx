import React from "react";

const toThreePrecision = (value: string | number) => {
  return Math.round(Number(value) * 1000) / 1000;
};

export default function BalanceTable(props: { data: any }) {
  const validateData = (data: any) => {
    if (!data || typeof data !== "object") return {};

    const maker = data.balances?.maker || {};
    const taker = data.balances?.taker || {};

    return {
      Leverex: maker,
      Bitfinex: taker,
    };
  };

  const { Leverex, Bitfinex } = validateData(props.data);

  const [LeverexState, setLeverexState] = React.useState<any>(Leverex);
  const [BitfinexState, setBitfinexState] = React.useState<any>(Bitfinex);

  React.useEffect(() => {
    const { Leverex, Bitfinex } = validateData(props.data);
    setLeverexState(Leverex);
    setBitfinexState(Bitfinex);
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
                {BitfinexState.balances &&
                  Object.keys(BitfinexState.balances.margin).map(
                    (key: string, index: React.Key | null | undefined) => {
                      const balance = BitfinexState.balances.margin[key];
                      return (
                        <tr key={index}>
                          <td>{toThreePrecision(balance?.total || 0)}</td>
                          <td>{toThreePrecision(balance?.free || 0)}</td>
                          <td>{toThreePrecision(balance?.reserved || 0)}</td>
                          <td>{key}</td>
                        </tr>
                      );
                    }
                  )}
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
                  <td>
                    {new Date(LeverexState._timestamp || "").toUTCString()}
                  </td>
                  <td>{toThreePrecision(LeverexState.balances?.USDT || 0)}</td>
                  <td>{toThreePrecision(LeverexState.balances?.USDP || 0)}</td>
                  <td>{LeverexState.ccy}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
