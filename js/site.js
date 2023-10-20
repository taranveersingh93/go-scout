const events = [
    {
        event: "ComicCon",
        city: "New York",
        state: "New York",
        attendance: 240000,
        date: "06/01/2017",
    },
    {
        event: "ComicCon",
        city: "New York",
        state: "New York",
        attendance: 250000,
        date: "06/01/2018",
    },
    {
        event: "ComicCon",
        city: "New York",
        state: "New York",
        attendance: 257000,
        date: "06/01/2019",
    },
    {
        event: "ComicCon",
        city: "San Diego",
        state: "California",
        attendance: 130000,
        date: "06/01/2017",
    },
    {
        event: "ComicCon",
        city: "San Diego",
        state: "California",
        attendance: 140000,
        date: "06/01/2018",
    },
    {
        event: "ComicCon",
        city: "San Diego",
        state: "California",
        attendance: 150000,
        date: "06/01/2019",
    },
    {
        event: "HeroesCon",
        city: "Charlotte",
        state: "North Carolina",
        attendance: 40000,
        date: "06/01/2017",
    },
    {
        event: "HeroesCon",
        city: "Charlotte",
        state: "North Carolina",
        attendance: 45000,
        date: "06/01/2018",
    },
    {
        event: "HeroesCon",
        city: "Charlotte",
        state: "North Carolina",
        attendance: 50000,
        date: "06/01/2019",
    },
];

const getEvents = () => {
    return events;
}

const buildDropDown = () => {
    const currentEvents = getEvents();
    const cityNames = currentEvents.map(event => event.city);
    const uniqueCities = new Set(cityNames);
    const dropDownChoices = ['All', ...uniqueCities];
    const dropdownTemplate = document.querySelector('#dropdownItemTemplate');
    const cityDropdown = document.querySelector('#cityDropdown');
    for (let i = 0; i < dropDownChoices.length; i++) {
        const dropdownItem = dropdownTemplate.content.cloneNode(true);
        const cityName = dropDownChoices[i];
        dropdownItem.querySelector('a').innerText = cityName;
        cityDropdown.appendChild(dropdownItem);
    }
    displayEvents(currentEvents);
    const stats = calculateStats(currentEvents)
    displayStats(stats);
}

const displayEvents = (events) => {
    const eventsTable = document.getElementById('eventsTable');
    eventsTable.innerHTML = '';

    for (let i = 0; i < events.length; i++) {
        const event = events[i];
        const eventRow = document.createElement('tr');
        const eventName = document.createElement('td');
        const eventCity = document.createElement('td');
        const eventState = document.createElement('td');
        const eventAttendance = document.createElement('td');
        const eventDate = document.createElement('td');
        eventName.innerText = event.event;
        eventCity.innerText = event.city;
        eventState.innerText = event.state;
        eventAttendance.innerText = event.attendance;
        eventDate.innerText = event.date;
        eventRow.appendChild(eventName);
        eventRow.appendChild(eventCity);
        eventRow.appendChild(eventState);
        eventRow.appendChild(eventAttendance);
        eventRow.appendChild(eventDate);
        eventsTable.appendChild(eventRow);
    }
}

const calculateStats = events => {
    let sum = 0;
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < events.length; i++) {
        const attendance = events[i].attendance;
        sum += attendance;
        if (min > attendance) {
            min = attendance
        }

        if (max < attendance) {
            max = attendance;
        }
    }
    let average = Math.floor(sum/events.length);
    
    const stats = {
        sum,
        average,
        min,
        max
    }
    return stats;
}



const displayStats = values => {
    const totalAttendanceElement = document.getElementById('totalAttendance');
    totalAttendanceElement.innerText = values.sum.toLocaleString();
    const avgAttendanceElement = document.getElementById('averageAttendance');
    avgAttendanceElement.innerText = values.average.toLocaleString();
    const minAttendanceElement = document.getElementById('leastAttendance');
    minAttendanceElement.innerText = values.min.toLocaleString();
    const maxAttendanceElement = document.getElementById('mostAttendance');
    maxAttendanceElement.innerText = values.max.toLocaleString();
}