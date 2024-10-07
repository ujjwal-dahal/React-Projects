import "../style/Clock.css";

function Clock() {
  const date = new Date();

  const monthsName = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const daysName = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  ];

  const currentDay = date.getDate(); 
  const currentDayName = daysName[date.getDay()]; 

  
  const ordinalSuffix = (day) => {
    if (day === 1 || day === 21 || day === 31) return 'st';
    if (day === 2 || day === 22) return 'nd';
    if (day === 3 || day === 23) return 'rd';
    return 'th';
  };

  const formattedDay = `${currentDay}${ordinalSuffix(currentDay)}`;

  const currentMonth = monthsName[date.getMonth()]; 
  const currentYear = date.getFullYear(); 

  return (
    <div className="main-container">
      <div className="title-container">Current Date</div>
      <div className="container">
        <div className="semi-container">
          <div className="day-container">{formattedDay}</div>
          <div className="ratio-container">-</div>
          <div className="month-container">{currentMonth}</div>
        </div>
        <div className="year-container">{currentYear}</div>
        <div className="day-container">{currentDayName}</div>
      </div>
    </div>
  );
}

export default Clock;
