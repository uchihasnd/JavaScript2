const agenda = [
  { name: "Isabella", birthday: "1998-04-19" },
  { name: "Javier", birthday: "1976-01-19" },
  { name: "Ana", birthday: "2000-12-07" },
  { name: "David", birthday: "1985-07-12" },
  { name: "Angela", birthday: "2003-11-08" },
  {},
  {name: "Elias"},
  {name: "Amelia", birthday: 8100}
];

function zodiacSign(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  switch (month) {
    case 1: //January
      if (day <= 19) {
        return "Capricorn";
      } else {
        return "Aquarius";
      }
    case 2: //February
      if (day <= 18) {
        return "Aquarius";
      } else {
        return "Pisces";
      }
    case 3: //March
      if (day <= 20) {
        return "Pisces";
      } else {
        return "Aries";
      }
    case 4: //April
      if (day <= 19) {
        return "Aries";
      } else {
        return "Taurus";
      }
    case 5: //May
      if (day <= 20) {
        return "Taurus";
      } else {
        return "Gemini";
      }
    case 6: //June
      if (day <= 20) {
        return "Gemini";
      } else {
        return "Cancer";
      }
    case 7: //July
      if (day <= 22) {
        return "Cancer";
      } else {
        return "Leo";
      }
    case 8: //August
      if (day <= 22) {
        return "Leo";
      } else {
        return "Virgo";
      }
    case 9: //September
      if (day <= 22) {
        return "Virgo";
      } else {
        return "Libra";
      }
    case 10: //October
      if (day <= 22) {
        return "Libra";
      } else {
        return "Scorpio";
      }
    case 11: //November
      if (day <= 21) {
        return "Scorpio";
      } else {
        return "Sagitarius";
      }
    case 12: //December
      if (day <= 21) {
        return "Sagitarius";
      } else {
        return "Capricorn";
      }

    default:
      return "Invalid date";
  }
}

function showZodiacSign(people) {
  return people.filter(person => {
      if (!person.name || !person.birthday || typeof person.birthday !== 'string') {
        return false;
      }
      return true;
    })
    .map(person => {
      const date = new Date(person.birthday);
      const sign = zodiacSign(date);
      return `${person.name} is ${sign}`;
    });
}

console.log(showZodiacSign(agenda));