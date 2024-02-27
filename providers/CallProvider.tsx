import { PropsWithChildren, createContext } from 'react';

type CallProviderProps = PropsWithChildren;

const CallContext = createContext(null as any);

export default function CallProvider({ children }: CallProviderProps) {
    return <CallContext.Provider value={{}}>{children}</CallContext.Provider>;
}
