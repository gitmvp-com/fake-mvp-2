export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  revenue: number;
  growth: number;
}
