import css from './statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            className={css.itemStat}
            key={stat.id}
            style={{
              backgroundColor: stat.color,
              padding: '20px',
              minWidth: '60px',
            }}
          >
            <span className={css.labelStat}>{stat.label}</span>
            <br />
            <br />
            <span className={css.percentageStat}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
