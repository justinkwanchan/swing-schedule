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
  startDateTime: string;
  endDateTime: string;
  repeated: boolean;
  repeatedUntil: string;
  location: string;
  price: string;
  details: string;
};
