let day_plan;
// const day = 'friday';
const day = prompt("❓what day is today?☀️");
switch (day) {
    case 'monday':
        day_plan = 'meeting with Teacher 👨‍🏫'
        break;
    case 'tuesday':
        day_plan ='Sol night🌃'
        break;
    case 'wednesday':
        day_plan = 'IT lesson👨‍💻'
        break;
    case 'thursday':
        day_plan = 'Gym💪'
        break; 
    case 'friday':
        day_plan = 'billiard🎱'
        break;  
    case 'saturday':
        day_plan = 'read a book📖'
        break;
    case 'sunday':
        day_plan = 'go to Church⛪'
        break;                        
    default:
        // console.log('invalid day');
        alert('invalid day')

}

// console.log(day_plan);
alert(day_plan)