export default function StatisticItem({ data }) {
  return data.map(({ id, label, percentage }) => (
    <li className="item" key={id}>
      <span className="label">{label} </span>
      <span className="percentage">{percentage}%</span>
    </li>
  ));
}
