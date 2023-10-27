import "./statistics.css";

const Statistics = ({ title, stats }) => {
    return (
      <section className="statistics">
          {title && <h2 className="title">{title}</h2>}
          <ul className="stat-list">
            {stats.map(stat => (
              <li
                className="item-stat"
                key={stat.id}
                style={{
                  backgroundColor: stat.color,
                  padding: '20px',
                  minWidth: '60px',
                }}
              >
                <span className="label-stat">{stat.label}</span>
                <br />
                <br />
                <span className="percentage-stat">{stat.percentage}%</span>
              </li>
            ))}
          </ul>
      </section>
    );
  };

  export default Statistics;