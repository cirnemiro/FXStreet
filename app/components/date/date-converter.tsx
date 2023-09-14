interface IDateConverter {
    ISOdate:string
}

const DateConverter = ({ISOdate}:IDateConverter) => {
    console.log(ISOdate);
    
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

    const date = new Date(ISOdate)
    const month = date.getMonth()
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()


    return(
        <p>{months[month]} {day}, {hour < 10 ? `0${hour}` : hour}:{minute < 10 ? `0${minute}` : minute}</p>
    )
}

export default DateConverter