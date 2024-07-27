// app/types/user.ts

export type Activity = {
    title: string;
    date: string;
    description: string;
  };
  
  export type User = {
    name: string;
    userTag: string
    accountAddress: string
    profilePicture: string;
    about: string,
    email: string;
    phone: string;
    activities: Activity[];
  };
  