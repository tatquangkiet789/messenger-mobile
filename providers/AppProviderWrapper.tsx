import { PropsWithChildren } from 'react';
import CallProvider from './CallProvider';
import NotificationProvider from './NotificationProvider';

type AppProviderWrapperProps = PropsWithChildren;

export default function AppProviderWrapper({ children }: AppProviderWrapperProps) {
    return (
        <NotificationProvider>
            <CallProvider>{children}</CallProvider>
        </NotificationProvider>
    );
}
