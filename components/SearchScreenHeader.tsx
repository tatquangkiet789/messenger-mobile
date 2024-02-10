import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

import CustomHeaderWrapper from './CustomHeaderWrapper';
import { ICONS, COLORS } from '@/constants';
import { Icon } from '@/lib/components';
import useDebounce from '@/hooks/useDebouce';
import { useAppDispatch } from '@/store/hooks';
import { updateSearchKeyword } from '@/store/reducers';

export default function SearchScreenHeader() {
    const router = useRouter();
    const [keyword, setKeyword] = useState('');
    const debouncedKeyword = useDebounce({ initialValue: keyword, delay: 500 });
    const dispatch = useAppDispatch();

    function handleNavigateBack() {
        router.back();
    }

    function handleClearSearchKeyword() {
        setKeyword('');
    }

    useEffect(() => {
        dispatch(updateSearchKeyword(debouncedKeyword));
    }, [debouncedKeyword]);

    return (
        <CustomHeaderWrapper>
            <View style={styles.container}>
                <Pressable onPress={handleNavigateBack} style={styles.goBackButton}>
                    <Icon name={ICONS.BACK} color={COLORS.WHITE} size={28} />
                </Pressable>
                <View style={styles.searchInputContainer}>
                    <TextInput
                        value={keyword}
                        onChangeText={setKeyword}
                        style={styles.searchInput}
                        placeholderTextColor={COLORS.WHITE}
                        placeholder='Tìm kiếm'
                    />
                    {keyword.length !== 0 ? (
                        <Pressable onPress={handleClearSearchKeyword}>
                            <Icon
                                name={ICONS.CLOSE_CIRCLE_OUTLINE}
                                color={COLORS.WHITE}
                                size={28}
                            />
                        </Pressable>
                    ) : (
                        <Icon name={ICONS.SEARCH} color={COLORS.WHITE} size={28} />
                    )}
                </View>
            </View>
        </CustomHeaderWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    goBackButton: {
        marginRight: 8,
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
        marginRight: 8,
    },
});
