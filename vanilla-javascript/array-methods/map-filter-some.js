// map - 루프 및 배열 반환
// filter - 조건에 따른 요소 걸러내기
// some - 하나라도 조건에 맞는다면 true. ex) 어떤 배열의 값에 ["map", "filter", "some"] 세 가지 중 하나라도 키워드가 존재하면 true
const target = ["map", "filter", "some"];
const lists = [
  [
    {
      id: "A1",
      keyword: ["map", "some"],
      value: {}
    },
    {
      id: "A2",
      keyword: ["every"],
      value: {}
    },
    {
      id: "A3",
      keyword: ["filter"],
      value: {}
    }
  ],
  [
    {
      id: "B1",
      keyword: ["some"],
      value: {}
    },
    {
      id: "B3",
      keyword: ["slice", "splice"],
      value: {}
    }
  ],
  [
    {
      id: "",
      keyword: [],
      value: {}
    }
  ]
];

const filtered = lists
  .map(list =>
    list.filter(item => target.some(key => item.keyword.indexOf(key) > -1))
  )
  .filter(item => item.length > 0);

  // 0 => [{id: "A1" ...}, {id: "A3" ...}]
  // 1 => [{id: "B1" ...}]