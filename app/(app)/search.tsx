import {
    ActivityIndicator,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
} from 'react-native';

import { KeyboardAvoidingViewWrapper } from '@/components';
import { COLORS } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Suspense, useEffect, useState } from 'react';
import { SearchResultList, fetchAllUsersByKeywordThunk } from '@/features/users';
import { toggleIsNewSearchList } from '@/store/reducers';

export default function SearchScreen() {
    const dispatch = useAppDispatch();
    const { searchResult, searchKeyword } = useAppSelector((state) => state.users);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (searchKeyword === '') return;

        dispatch(toggleIsNewSearchList(page === 1));
        const res = dispatch(fetchAllUsersByKeywordThunk({ keyword: searchKeyword, page }));

        return () => res.abort();
    }, [page, searchKeyword]);

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingViewWrapper>
                <KeyboardAvoidingViewWrapper>
                    <Suspense fallback={<ActivityIndicator size={'large'} />}>
                        <SearchResultList searchResults={searchResult} />
                    </Suspense>
                </KeyboardAvoidingViewWrapper>
            </KeyboardAvoidingViewWrapper>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: COLORS.GRAY_241_241_242_1,
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'aqua',
    },
});
