import css from './Feedback.module.css'

const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
    return (
        <ul className={css.listFeedback}>
            <li className={css.itemFeedback}>Good: {feedback.good}</li>
            <li className={css.itemFeedback}>Neutral: {feedback.neutral}</li>
            <li className={css.itemFeedback}>Bad: {feedback.bad}</li>
            <li className={css.itemFeedback}>Total Feedback: {totalFeedback}</li>
            <li className={css.itemFeedback}>Positive Feedback: {positivePercentage}%</li>
        </ul>
    );
};
export default Feedback;