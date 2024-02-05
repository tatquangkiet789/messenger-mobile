import { View, Text, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { memo } from 'react';
import { User } from '../entities/user';
import { VerifiedIcon } from '@/components/svg/VerifiedIcon';
import { MainStackNavigationProp } from '@/navigations/MainStack/constants/constants';
import { useNavigation } from '@react-navigation/native';

type UserCardProps = {
    user: User;
};

const UserCard = memo(function UserCard({ user }: UserCardProps) {
    const { avatar, firstName, lastName, username, isVerified } = user;
    const navigation = useNavigation<MainStackNavigationProp>();

    function handleNavigateToUserScreen(username: string) {
        navigation.navigate('UserScreen', {
            username: username,
        });
    }

    return (
        <TouchableOpacity
            onPress={() => handleNavigateToUserScreen(username)}
            className='flex-row items-center justify-start p-4 bg-gray_248_248_248 border-b border-b-gray_012'
        >
            <Image source={{ uri: avatar }} alt='User Avatar' className='w-12 h-12 rounded-full' />
            <View className='pl-2 items-start'>
                <View className='flex-row items-center justify-center gap-2'>
                    <Text className='text-base font-bold'>
                        {lastName} {firstName}
                    </Text>
                    {isVerified ? <VerifiedIcon /> : null}
                </View>
                <Text className='text-xs font-medium text-gray_075'>{username}</Text>
            </View>
        </TouchableOpacity>
    );
});

export default UserCard;
