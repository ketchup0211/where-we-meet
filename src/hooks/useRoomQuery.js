import * as roomApi from '@/apis/roomApi';
import { useQuery } from '@tanstack/react-query';

export const useRoomQuery = (roomId) => {
  const { data, isLoading } = useQuery({
    queryKey: ['room'],
    queryFn: async () => {
      console.log('sdfsdfsdfsd');
      return await roomApi.getRoomData(roomId);
    }
  });

  return { data, isLoading };
};
