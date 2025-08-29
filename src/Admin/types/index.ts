export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  date: string;
  status: 'Active' | 'Inactive';
}

export interface Feedback {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  status: 'New' | 'Read' | 'Replied';
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  position: string;
  department: string;
  joinDate: string;
  salary: number;
}