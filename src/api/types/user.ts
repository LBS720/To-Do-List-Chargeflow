/** @format */

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  image: string;
  address: {
    address: string;
    city: string;
    state: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
  company: {
    name: string;
    title: string;
    department: string;
  };
}
