import { User, Feedback, Employee } from '../types';

const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations'];
const positions = ['Manager', 'Developer', 'Analyst', 'Coordinator', 'Specialist', 'Director'];

export const generateMockUsers = (count: number): User[] => {
  const users: User[] = [];
  
  for (let i = 1; i <= count; i++) {
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 365));
    
    users.push({
      id: `user-${i}`,
      name: `User ${i}`,
      email: `user${i}@example.com`,
      phone: `+1-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
      location: locations[Math.floor(Math.random() * locations.length)],
      date: date.toISOString().split('T')[0],
      status: Math.random() > 0.2 ? 'Active' : 'Inactive'
    });
  }
  
  return users;
};

export const generateMockFeedbacks = (count: number): Feedback[] => {
  const feedbacks: Feedback[] = [];
  const subjects = ['Product Inquiry', 'Technical Support', 'Feature Request', 'Bug Report', 'General Feedback'];
  const messages = [
    'Great service, very satisfied with the product quality.',
    'Having issues with the login functionality.',
    'Would love to see more features in the next update.',
    'The dashboard is very user-friendly.',
    'Need help with account setup.'
  ];
  
  for (let i = 1; i <= count; i++) {
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 90));
    
    feedbacks.push({
      id: `feedback-${i}`,
      name: `Customer ${i}`,
      email: `customer${i}@example.com`,
      subject: subjects[Math.floor(Math.random() * subjects.length)],
      message: messages[Math.floor(Math.random() * messages.length)],
      date: date.toISOString().split('T')[0],
      status: ['New', 'Read', 'Replied'][Math.floor(Math.random() * 3)] as 'New' | 'Read' | 'Replied'
    });
  }
  
  return feedbacks;
};

export const generateMockEmployees = (count: number): Employee[] => {
  const employees: Employee[] = [];
  
  for (let i = 1; i <= count; i++) {
    const joinDate = new Date();
    joinDate.setDate(joinDate.getDate() - Math.floor(Math.random() * 1000));
    
    employees.push({
      id: `emp-${i}`,
      name: `Employee ${i}`,
      email: `employee${i}@company.com`,
      position: positions[Math.floor(Math.random() * positions.length)],
      department: departments[Math.floor(Math.random() * departments.length)],
      joinDate: joinDate.toISOString().split('T')[0],
      salary: Math.floor(Math.random() * 80000) + 40000
    });
  }
  
  return employees;
};