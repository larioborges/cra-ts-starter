import { format } from 'date-fns';

export const formatDate = (date: Date | undefined): string => (date != null ? format(date, 'dd-MM-yyyy') : '');

export const formatDateTime = (dateTime: Date | undefined): string =>
  dateTime != null ? format(dateTime, 'dd-MM-yyyy hh:mm a..aa') : '';
