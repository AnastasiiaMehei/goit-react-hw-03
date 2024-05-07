import css from './Description.module.css'
export default function Description() {
return (<div className={css.div}>
    <h1><span className={css.textColor}>Sip</span> Happens Café
</h1>
<p>Please leave your feedback <span className={css.textSpan}>about</span> our service <span className={css.textSpan}>by</span> selecting one <span className={css.textSpan}>of the</span> options <span className={css.textSpan}>below.</span></p>
</div>)
}