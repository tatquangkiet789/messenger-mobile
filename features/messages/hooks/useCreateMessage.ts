import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback } from 'react';
import { createMessageThunk } from '../services/messageThunk';
import { CreateMessage } from '../models/message';

export default function useCreateMessage() {
    const {} = useAppSelector((state) => state.messages);
    const dispatch = useAppDispatch();

    const handleCreateMessage = useCallback(({ content, receiverID }: CreateMessage) => {
        try {
            const formData = new FormData();

            formData.append('content', content);
            formData.append('receiverID', receiverID.toString());

            dispatch(createMessageThunk(formData));
        } catch (error) {
            const err = error as Error;
            console.error(err);
            throw new Error(err.message);
        }
    }, []);

    return { handleCreateMessage };
}
