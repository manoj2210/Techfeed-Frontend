let x={
    "Friday": [
        {
        "time":"10:30-11:20",
        "class": "M201",
        "courseCode": "18XT41",
        "subject": "Stochastic Process"
        },
        {
        "time":"11:20-12:10",
        "class": "M201",
        "courseCode": "18XT44",
        "subject": "Operating Systems"
        },
        {
        "time":"1:40-2:30",
        "class": "IIL",
        "courseCode": "18XT48",
        "subject": "RDBMS Lab"
        },
        {
            "time": "2:30-3:20",
            "class": "IIL",
            "courseCode": "18XT48",
            "subject": "RDBMS Lab"
        },
        {
            "time": "3:30-4:20",
            "class": "M504",
            "courseCode": "18XT41",
            "subject": "Stochastic Process"
        },
        {
            "time": "8:30-9:20",
            "class": "DS",
            "courseCode": "18XT46",
            "subject": "Operating Systems Lab"
        },
        {
            "time": "9:20-10:10",
            "class": "DS",
            "courseCode": "18XT46",
            "subject": "Operating Systems Lab"
        }
    ],
    "Monday": [
        {
            "time": "10:30-11:20",
            "class": "NSL",
            "courseCode": "18XT47",
            "subject": "Computer Networks Lab"
        },
        {
            "time":"11:20-12:10",
        "class": "NSL",
            "courseCode": "18XT47",
            "subject": "Computer Networks Lab"
    },
        {
            "time":"1:40-2:30",
        "class": "J513",
            "courseCode": "18XT44",
            "subject": "Operating Systems"
    },
        {
            "time":"2:30-3:20",
        "class": "J513",
            "courseCode": "",
            "subject": "TWM"
    },
        {
            "time":"3:30-4:20",
        "class": "J513",
            "courseCode": "18XT43",
            "subject": "Optimization Techniques"
    },
        {
            "time":"8:30-9:20",
        "class": "J513",
            "courseCode": "18XT45",
            "subject": "Computer Networks"
    },
        {
            "time":"9:20-10:10",
        "class": "",
            "courseCode": "",
            "subject": "Free Hour"
    },
],
    "Saturday": [
    {time:"8:30-9:20",
        "class": "Holiday",
            "courseCode": "",
            "subject": ""
    }
],
    "Sunday": [
        {time:"8:30-9:20",
        "class": "Holiday",
            "courseCode": "",
            "subject": ""
    }
],
    "Thursday": [
        {time:"10:30-11:20",
        "class": "CSL3",
            "courseCode": "18XT48",
            "subject": "RDBMS Lab"
    },
        {time:"11:20-12:10",
        "class": "CSL3",
            "courseCode": "18XT48",
            "subject": "RDBMS Lab"
    },
        {time:"1:40-2:30",
        "class": "J513",
            "courseCode": "18XT42",
            "subject": "Database Design"
    },
        {time:"2:30-3:20",
        "class": "J513",
            "courseCode": "",
            "subject": "SMR"
    },
        {time:"3:30-4:20",
        "class": "J513",
            "courseCode": "18XT45",
            "subject": "Computer Networks"
    },
        {time:"8:30-9:20",
        "class": "NSL",
            "courseCode": "18XT47",
            "subject": "Computer Networks Lab"
    },
        {time:"9:20-10:10",
        "class": "NSL",
            "courseCode": "18XT47",
            "subject": "Computer Networks Lab"
    }],
    "Tuesday": [
        {"time":"10:30-11:20",
        "class": "DS",
            "courseCode": "18XT46",
            "subject": "Operating Systems Lab"
    },
        {"time":"11:20-12:10",
        "class": "DS",
            "courseCode": "18XT46",
            "subject": "Operating Systems Lab"
    },
        {time:"1:40-2:30",
        "class": "",
            "courseCode": "",
            "subject": "Free hour"
    },
        {time:"2:30-3:20",
        "class": "M201",
            "courseCode": "18XT43",
            "subject": "Optimization Techniques"
    },

        {time:"3:30-4:20",
        "class": "M201",
            "courseCode": "18XT44",
            "subject": "Operating Systems"
    },

        {time:"8:30-9:20",
        "class": "M201",
            "courseCode": "18XT42",
            "subject": "Database Design"
    },
        {time:"9:20-10:10",
        "class": "M201",
            "courseCode": "18XT41",
            "subject": "Stochastic Process"
    }
    ],
    "Wednesday": [
        {
            "time":"10:30-11:20",
        "class": "M201",
            "courseCode": "18XT44",
            "subject": "Operating Systems"
    },
        {"time":"11:20-12:10",
        "class": "M201",
            "courseCode": "18XT41",
            "subject": "Stochastic Process"
    },
        {"time":"1:40-2:30",
        "class": "M201",
            "courseCode": "18XT41",
            "subject": "Stochastic Process"
    },
        {"time":"2:30-3:20",
        "class": "M201",
            "courseCode": "18XT45",
            "subject": "Computer Networks"
    },

        {"time": "8:30-9:20",
        "class": "M504",
            "courseCode": "18XT43",
            "subject": "Optimization Techniques"
    },

        {"time":"9:20-10:10",
        "class": "M504",
            "courseCode": "18XT42",
            "subject": "Database Design"
    },
]
};

let arr=[x['Monday'],x['Tuesday'],x['Wednesday'],x['Thursday'],x['Friday'],x['Saturday'],x['Sunday']];


console.log(arr);