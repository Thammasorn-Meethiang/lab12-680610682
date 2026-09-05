interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
}

export type { TaskCardProps };

interface SidebarProps {
  username: string;
  type: "admin" | "student";
}
export type { SidebarProps };

interface FooterProps {
  year: number;
  fullName: string;
  studentId: string;
}
export type { FooterProps };
