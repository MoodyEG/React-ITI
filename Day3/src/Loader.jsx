import { ClockLoader } from 'react-spinners';

export default function Loader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ClockLoader color="#58cdff" />
    </div>
  );
}
