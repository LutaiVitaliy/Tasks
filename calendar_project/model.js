function Calendar() {
    this.events = [];

    var date = new Date();
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    var nextMonth = month + 1;
    var prevMonth = month - 1;
    var FebNumberOfDays;

    if (month == 1) {
        if ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)) {
            FebNumberOfDays = 29;
        }
        FebNumberOfDays = 28;
    }

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayPerMonth = ["31", "" + FebNumberOfDays + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

    var nextDate = new Date(year, month + 1);
    var weekdays = new Date(year, month).getDay();
    var weekdays2 = weekdays;
    var numOfDays = dayPerMonth[month];

    this.render = function() {
        var monthSpan = document.getElementById(`monthSpan`);
        var yearSpan = document.getElementById(`yearSpan`);
        var container = document.getElementById(`calendarContainer`);
        monthSpan.innerHTML = monthNames[month];
        yearSpan.innerHTML = year;

        for (let i = 0; i < dayNames.length; i++) {
            var containerHeadDiv = document.createElement(`div`);
            containerHeadDiv.className = `calHeader`;
            containerHeadDiv.innerHTML = dayNames[i];
            container.appendChild(containerHeadDiv);

        }

        while (weekdays2 > 0) {
            var containerDiv = document.createElement(`div`);
            var containerMonthDiv = document.createElement(`div`);
            containerDiv.className = `calItem`;
            containerMonthDiv.className = `monthHead`;
            container.appendChild(containerDiv);
            containerDiv.appendChild(containerMonthDiv);
            weekdays2--;
        }

        for (let i = 1; i <= numOfDays; i++) {
            var containerDiv = document.createElement(`div`);
            var containerMonthDiv = document.createElement(`div`);
            containerDiv.className = `calItem`;
            containerMonthDiv.className = `monthHead`;
            containerMonthDiv.innerHTML = i;
            container.appendChild(containerDiv);
            containerDiv.appendChild(containerMonthDiv);
        }

        var i = container.childElementCount;

        while (i < 42) {
            var containerDiv = document.createElement(`div`);
            var containerMonthDiv = document.createElement(`div`);
            containerDiv.className = `calItem`;
            containerMonthDiv.className = `monthHead`;
            container.appendChild(containerDiv);
            containerDiv.appendChild(containerMonthDiv);
            i++;
        }

    }

}

Calendar.prototype.addEvent = function(title, date) {
    var id = new Date().getTime();
    var title = title;
    var eventDay = date;
    var event = { id: id, title: title, day: eventDay }
    this.events.push(event)

}


var calendar = new Calendar();
calendar.render();