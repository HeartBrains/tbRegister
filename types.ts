
export enum ViewState {
  LANDING = 'LANDING',
  REGISTER_LOCAL = 'REGISTER_LOCAL',
  REGISTER_LOCAL_STUDENT = 'REGISTER_LOCAL_STUDENT',
  REGISTER_FOREIGN = 'REGISTER_FOREIGN',
  REGISTER_CORPORATE = 'REGISTER_CORPORATE',
  DASHBOARD = 'DASHBOARD',
  SUCCESS = 'SUCCESS',
  EDIT_PROFILE = 'EDIT_PROFILE',
}

export interface UserData {
  name: string;
  email: string;
  type: 'Local' | 'Foreign' | 'Corporate';
  memberId?: string;
  isStudying?: boolean; // For Local
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info';
}
