import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics ({ good, neutral, bad, total, positiveFeedbackPercentage}) {
 return (
    <ul className={css.list}>
        <li className={css.item}>Good: {good}</li>
        <li className={css.item}>Neutral: {neutral}</li>
        <li className={css.item}>Bad: {bad}</li>
        <li className={css.item}>Total: {total}</li>
        <li className={css.item}>Positive feedback: {positiveFeedbackPercentage}%</li>
    </ul>
 ) 
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedbackPercentage: PropTypes.number.isRequired,
}