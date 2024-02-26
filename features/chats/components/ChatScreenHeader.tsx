import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { COLORS, ICONS } from '@/constants';
import { Icon } from '@/lib/components';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearSearchChatUsersKeyword, updateSearchChatUsersKeyword } from '@/store/reducers';
import CustomHeaderWrapper from '../../../components/CustomHeaderWrapper';
import { useDebounce } from '@/hooks';
import { useEffect, useState } from 'react';

export default function ChatScreenHeader() {
    const [keyword, setKeyword] = useState('');
    const debouncedKeyword = useDebounce({ initialValue: keyword, delay: 500 });
    const dispatch = useAppDispatch();
    const router = useRouter();

    function handleClearSearchInput() {
        setKeyword('');
    }

    function handleNavigateToSearchScreen() {
        router.push('/(app)/search');
    }

    useEffect(() => {
        dispatch(updateSearchChatUsersKeyword(debouncedKeyword));
    }, [debouncedKeyword]);

    return (
        <CustomHeaderWrapper>
            <View style={styles.wrapper}>
                <Icon name={ICONS.SEARCH} color={COLORS.WHITE} size={28} />
                <View style={styles.searchInputContainer}>
                    <TextInput
                        value={keyword}
                        onChangeText={setKeyword}
                        style={styles.searchInput}
                        placeholderTextColor={COLORS.WHITE}
                        placeholder='Tìm kiếm'
                    />
                    {keyword.length !== 0 ? (
                        <Pressable onPress={handleClearSearchInput}>
                            <Icon
                                name={ICONS.CLOSE_CIRCLE_OUTLINE}
                                color={COLORS.WHITE}
                                size={24}
                            />
                        </Pressable>
                    ) : null}
                </View>
                <TouchableOpacity onPress={handleNavigateToSearchScreen}>
                    <Icon name={ICONS.ADD} color={COLORS.WHITE} size={28} />
                </TouchableOpacity>
            </View>
        </CustomHeaderWrapper>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        gap: 16,
    },
    searchInputContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 4,
        alignItems: 'center',
    },
    searchInput: {
        fontSize: 16,
        color: COLORS.WHITE,
        flex: 1,
    },
});
