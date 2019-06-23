const APIS = {
  province: '/api/province',
  city: '/api/city',
  county: '/api/county'
}

function fetchData(api) {
  return new Promise((resolve, reject) => {
    let data;
    switch (api) {
      case APIS.province:
        data = [
          {
            id: 1,
            province: '山西省'
          },
          {
            id: 2,
            province: '山东省'
          },
          {
            id: 3,
            province: '上海市'
          }
        ]
        break;

      case APIS.city:
        data = [
          {
            id: 100,
            feature: '北方，旅游城市，王莽岭景区'
          },
          {
            id: 200,
            feature: '南方，梅雨季节'
          }
        ];
        break;

      case APIS.county:
        data = {
          id: 200,
          score: 20,
          totalScore: 180
        };
        break;
    }
    resolve(data);
  })
}

async function countFn() {
  let studentData = await fetchData(APIS.students)
  console.log(studentData, 'studentData')
}

countFn()
