// app/types/user.ts

export interface Activity  {
    title: string;
    date: string;
    description: string;
  };
  
  export interface User  {
    name: string;
    userTag: string
    accountAddress: string
    profilePicture: string;
    about: string,
    email: string;
    phone: string;
    activities: Activity[];
  };
  
  export interface ToastMessage {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    message: string;
  }