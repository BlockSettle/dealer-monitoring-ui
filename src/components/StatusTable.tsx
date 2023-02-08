export default function (props: { data: any }) {
  return (
    <>
      <div>
        <h3>Dealer State</h3>
        {props.data.ready_state[0].ready ? (
          <span className="online">Online</span>
        ) : (
          <span className="offline">Offline</span>
        )}
      </div>
    </>
  );
}
