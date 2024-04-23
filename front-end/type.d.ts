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
  id: string;
  eventName: string;
  dateTime: string[];
  repeated: boolean;
  repeatedUntil: string;
  weekOf: string;
  location: string;
  price: string;
  details: string;
};

type EventFromDB = {
  pk: string;
  sk: string;
  eventName: string;
  startDateTime: Date;
  endDateTime: Date;
  cancelled: boolean;
  repeated: boolean;
  repeatedUntil: string;
  weekOf: Date;
  location: string;
  price: string;
  details: string;
  email: string;
};

type EventCard = {
  pk: string;
  weekOf: string;
  eventName: string;
  startDateTime: string;
};
