import StatisticItem from './StatisticItem';
import data from '../../data/statistic';

export default function StatisticList({ title }) {
  return (
    <section className="statistics">
      {/* <h2 className="title">Upload stats</h2> */}
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        <StatisticItem data={data} />
      </ul>
    </section>
  );
}
