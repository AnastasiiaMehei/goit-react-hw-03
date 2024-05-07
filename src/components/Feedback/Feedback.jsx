import css from './Feedback.module.css'
export default function Feedback({values, totalFeedback, positiveFeedbacks}){
    return (
           
                <div className={css.div}>
                    <p>Good: {values.good}</p>
                    <p>Neutral: {values.neutral}</p>
                    <p>Bad: {values.bad}</p>
                    <p>Total: {totalFeedback}</p>
                    <p>Positive: {positiveFeedbacks}%</p>
                </div>
    );}