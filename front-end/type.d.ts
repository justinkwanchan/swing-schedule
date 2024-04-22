type EventDetails = {
  id: string;
  image: string;
  datetime: string;
  title: string;
  organizer: string;
  location: string;
  address: string;
};

type CreateEventFormData = {
  eventName: string;
  dateTime: string[];
  repeated: boolean;
  repeatedUntil: string;
  location: string;
  price: string;
  details: string;
};

type EventFromDB = {
  repeated: boolean;
  eventName: string;
  cancelled: boolean;
  location: string;
  repeatedUntil: string;
  email: string;
  startDateTime: Date;
  sk: string;
  weekOf: Date;
  details: string;
  price: string;
  pk: string;
  endDateTime: Date;
};
