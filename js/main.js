let dataList = {
  "date": [
    {
      "date":"2022-11-15",
      "plan" : "러프스케치 마감",
      "timeTable":[
        {
          "topic":"topic01",
          "startTime":"2022-11-15 09:00:00",
          "endTime":"2022-11-15 12:30:00"
        },
        {
          "topic":"topic02",
          "startTime":"2022-11-15 13:08:00",
          "endTime":"2022-11-15 15:27:00"
        },
        {
          "topic":"topic01",
          "startTime":"2022-11-15 17:16:00",
          "endTime":"2022-11-15 20:00:00"
        }
      ],
      "record":{
        "img":"",
        "story":"2022-11-15 오늘의 일기"
      }
    },
    {
      "date":"2022-11-16",
      "timeTable":[
        {
          "topic":"topic02",
          "startTime":"2022-11-16 09:00:00",
          "endTime":"2022-11-16 12:30:00"
        },
        {
          "topic":"topic03",
          "startTime":"2022-11-16 13:08:00",
          "endTime":"2022-11-16 16:27:00"
        },
        {
          "topic":"topic03",
          "startTime":"2022-11-16 17:16:00",
          "endTime":"2022-11-16 20:00:00"
        }
      ]
    }
  ],
  "d-day": [
    {
      "name":"종강😊",
      "date":"2023-01-03"
    }
  ],
  "todoList": [
    {
      "id": 1,
      "name":"1번 투두리스트",
      "done":false
    },
    {
      "id": 2,
      "name":"2번 투두리스트",
      "done":true
    },
    {
      "id": 3,
      "name":"3번 투두리스트",
      "done":false
    },
    {
      "id": 4,
      "name":"4번 투두리스트",
      "done":false
    }
  ],
  "topic": ["topic01","topic02","topic03"],
  "holiday":[]
}

const holidayList = [ //설(1.1),추석(8.15),석가탄신일(4.8)
  {
    name:'새해',
    month: '01',
    day: '01'
  },
  {
    name:'삼일절',
    month: '03',
    day: '01'
  },
  {
    name:'어린이날',
    month: '05',
    day: '05'
  },
  {
    name:'현충일',
    month: '06',
    day: '06'
  },
  {
    name:'광복절',
    month: '08',
    day: '15'
  },
  {
    name:'개천절',
    month: '10',
    day: '03'
  },
  {
    name:'한글날',
    month: '10',
    day: '09'
  },
  {
    name:'크리스마스',
    month: '12',
    day: '25'
  },
]
const lunarDays = [
  {year: 2022,
  newYear:'',
  thanksGiving:'',
  buddha:''}
]

//localStorage.setItem('myTimeItems',JSON.stringify(dataList));
// $(function(){
//   let dataList = JSON.parse(localStorage.getItem('myTimeItems'));
//   if(!dataList.holiday){
//     dataList = {...dataList,holiday:holidayList}
//   }
//   console.log(dataList);
// });