import moment from 'moment';

export function format(type, amount) {
  switch (type) {
    case "dollar":
      return  `$ ${Number(amount).toLocaleString()}`;
      break;
    case "datetime":
      return moment(new Date(amount)).format("YYYY-MM-DD HH:mm");
      break;
  }
}