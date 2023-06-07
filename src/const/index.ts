export enum MESSAGE_CATEGORIES {
  SPORTS,
  FINANCE,
  MOVIES,
}

export const CATEGORIES_OPTIONS = [
  {
    label: "SPORTS",
    value: MESSAGE_CATEGORIES.SPORTS,
  },
  {
    label: "FINANCE",
    value: MESSAGE_CATEGORIES.FINANCE,
  },
  {
    label: "MOVIES",
    value: MESSAGE_CATEGORIES.MOVIES,
  },
];
export enum NOTIFICATION_TYPES {
  PUSH,
  EMAIL,
  SMS,
}

export interface INotification {
  category: MESSAGE_CATEGORIES;
  type: NOTIFICATION_TYPES[];
  message: string;
  fromUserId: string;
  fromUserEmail: string;
  userId: string;
  email: string;
  phone: string;
  date: Date;
}

export interface IMessage {
  message: string;
  category: MESSAGE_CATEGORIES,
  userId: string;
}
export type Tstatus = "idle" | "loading" | "failed";
