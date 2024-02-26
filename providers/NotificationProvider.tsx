import { PropsWithChildren, createContext } from 'react';

type NotificationProviderProps = PropsWithChildren;

const NotificationContext = createContext(null as any);

export default function NotificationProvider({ children }: NotificationProviderProps) {
    return <NotificationContext.Provider value={{}}>{children}</NotificationContext.Provider>;
}
