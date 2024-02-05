import { memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { User } from '../entities/user';
import { VerifiedIcon } from '@/components/svg/VerifiedIcon';

type AuthorDetailProps = {
    user: User;
    postCreatedDate: string;
};
const AuthorDetail = memo(function AuthorDetail({ user, postCreatedDate }: AuthorDetailProps) {
    const { firstName, lastName, avatar, isVerified, username } = user;

    function handleNavigateToUserDetail() {
        console.log(`Navigating to UserDetail screen [${username}]`);
    }

    return (
        <View className='flex-row'>
            <Image source={{ uri: avatar }} className='w-12 h-12 rounded-full' />
            <View className='pl-2 items-start'>
                <TouchableOpacity
                    onPress={handleNavigateToUserDetail}
                    className='flex-row items-center justify-center gap-2'
                >
                    <Text className='text-base font-bold'>
                        {lastName} {firstName}
                    </Text>
                    {isVerified ? <VerifiedIcon /> : null}
                </TouchableOpacity>
                <Text className='text-xs font-medium text-gray_075'>{postCreatedDate}</Text>
            </View>
        </View>
    );
});

export default AuthorDetail;
