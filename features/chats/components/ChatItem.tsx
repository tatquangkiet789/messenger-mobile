import { COLORS } from '@/constants';
import { LatestMessage } from '@/features/messages';
import { User } from '@/features/users';
import { MainStackNavigationProp } from '@/navigations/MainStack';
import { MessageStackNavigationProps, MessageStackParamList } from '@/navigations/MessageStack';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableHighlight } from 'react-native';

type ChatItemProps = {
    user: User;
    latestMessage: LatestMessage;
};

export default function ChatItem({ user, latestMessage }: ChatItemProps) {
    const navigation = useNavigation<MainStackNavigationProp>();

    function hanleNavigateToMessageScreen() {
        navigation.navigate('MessageScreen', {
            receiverID: user.id,
        });
    }

    return (
        <TouchableHighlight
            className='flex-row items-center justify-start p-4 border-b border-b-gray_006'
            style={{ gap: 16 }}
            onPress={hanleNavigateToMessageScreen}
            underlayColor={COLORS.GRAY_006}
        >
            <>
                <Image source={{ uri: user.avatar }} className='w-16 h-16 rounded-full' />
                <View className='flex-1 h-16 justify-center' style={{ gap: 4 }}>
                    <Text className='font-semibold' style={{ fontSize: 18 }}>
                        {user.lastName} {user.firstName}
                    </Text>
                    <Text className='text-gray_05 font-medium' style={{ fontSize: 14 }}>
                        {latestMessage.content}
                    </Text>
                </View>
            </>
        </TouchableHighlight>
    );
}
