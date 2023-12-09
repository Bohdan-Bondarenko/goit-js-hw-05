const getTotalBalanceByGender = (users, gender) => {
    return users
      .filter((user) => user.gender === gender)
      .reduce((sum, user) => sum + user.balance, 0);
    };
  const allСlients = [
    {
      name: "Moore Hensley",
      gender: "male",
      balance: 2811,
    },
    {
      name: "Sharlene Bush",
      gender: "female",
      balance: 3821,
    },
    {
      name: "Ross Vazquez",
      gender: "male",
      balance: 3793,
    },
    {
      name: "Elma Head",
      gender: "female",
      balance: 2278,
    },
    {
      name: "Carey Barr",
      gender: "male",
      balance: 3951,
    },
    {
      name: "Blackburn Dotson",
      gender: "male",
      balance: 1498,
    },
    {
      name: "Sheree Anthony",
      gender: "female",
      balance: 2764,
    },
  ];
  console.log(getTotalBalanceByGender(allСlients, "male"));
  console.log(getTotalBalanceByGender(allСlients, "female"));