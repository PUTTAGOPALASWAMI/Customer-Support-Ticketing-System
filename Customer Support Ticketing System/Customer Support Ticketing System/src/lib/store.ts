import { Ticket, User, Note } from '@/types/ticket';

const STORAGE_KEYS = {
  USER: 'support_system_user',
  TICKETS: 'support_system_tickets',
  USERS: 'support_system_users',
};

// Initialize empty storage
const initializeStorage = () => {
  if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify([]));
  }
  if (!localStorage.getItem(STORAGE_KEYS.TICKETS)) {
    localStorage.setItem(STORAGE_KEYS.TICKETS, JSON.stringify([]));
  }
};

initializeStorage();

export const storage = {
  getCurrentUser: (): User | null => {
    const user = localStorage.getItem(STORAGE_KEYS.USER);
    return user ? JSON.parse(user) : null;
  },

  setCurrentUser: (user: User | null) => {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEYS.USER);
    }
  },

  getUsers: (): User[] => {
    const users = localStorage.getItem(STORAGE_KEYS.USERS);
    return users ? JSON.parse(users) : [];
  },

  addUser: (user: User) => {
    const users = storage.getUsers();
    users.push(user);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  },

  getUserByEmail: (email: string): User | null => {
    const users = storage.getUsers();
    return users.find(u => u.email === email) || null;
  },

  registerUser: (name: string, email: string): User => {
    const newUser: User = {
      id: Date.now().toString(),
      email: email,
      name: name,
      role: 'customer',
    };
    storage.addUser(newUser);
    return newUser;
  },

  authenticateUser: (email: string, password: string): User | null => {
    const users = storage.getUsers();
    const user = users.find(u => u.email === email);
    // Simple password check - store passwords securely in production
    if (user && password.length >= 6) {
      storage.setCurrentUser(user);
      return user;
    }
    return null;
  },

  getTickets: (): Ticket[] => {
    const tickets = localStorage.getItem(STORAGE_KEYS.TICKETS);
    return tickets ? JSON.parse(tickets) : [];
  },

  addTicket: (ticket: Ticket) => {
    const tickets = storage.getTickets();
    tickets.push(ticket);
    localStorage.setItem(STORAGE_KEYS.TICKETS, JSON.stringify(tickets));
  },

  updateTicket: (ticketId: string, updates: Partial<Ticket>) => {
    const tickets = storage.getTickets();
    const index = tickets.findIndex(t => t.id === ticketId);
    if (index !== -1) {
      tickets[index] = { ...tickets[index], ...updates, updatedAt: new Date().toISOString() };
      localStorage.setItem(STORAGE_KEYS.TICKETS, JSON.stringify(tickets));
    }
  },

  addNote: (ticketId: string, note: Note) => {
    const tickets = storage.getTickets();
    const ticket = tickets.find(t => t.id === ticketId);
    if (ticket) {
      ticket.notes.push(note);
      ticket.updatedAt = new Date().toISOString();
      localStorage.setItem(STORAGE_KEYS.TICKETS, JSON.stringify(tickets));
    }
  },
};
