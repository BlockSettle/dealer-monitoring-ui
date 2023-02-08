export default function (props: { data: any[] }) {
  return (
    <>
      <div>
        <h3>Dealer State</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((data, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>
                    {data.ready_state[0].ready ? (
                      <span className="online">Online</span>
                    ) : (
                      <span className="offline">Offline</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
