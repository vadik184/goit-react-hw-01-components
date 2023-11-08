import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { getRandomHexColor } from 'helpers/randomColor';
export const StatisticsData = ({ title, stats }) => {
  return (
    <section>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css['stat-list']}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className={css['list-item']}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

StatisticsData.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};