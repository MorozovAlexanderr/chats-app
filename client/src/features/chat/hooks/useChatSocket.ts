import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { socketService } from '@/lib/socket';
import { Message } from '@/features/chat';

export const useChatSocket = (roomId: string) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    socketService.connect();
    socketService.joinRoom(roomId);

    socketService.subscribeToMessages(handleReceivedMessage);

    return () => {
      socketService.disconnect();
    };
  }, [roomId]);

  const handleReceivedMessage = (message: Message) => {
    queryClient.setQueryData(['messages', roomId], (cacheData: Message[]) => [
      ...cacheData,
      message,
    ]);
  };

  const handleSendMessage = (content: string) => {
    socketService.sendMessage({ content, roomId });
  };

  return { handleSendMessage };
};
