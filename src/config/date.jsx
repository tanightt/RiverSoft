import { format } from 'date-fns';

const date = transactionDate => {
  if (transactionDate) {
    return format(new Date(transactionDate), 'dd.MM.yy');
  }
};

export default date;
