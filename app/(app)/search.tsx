import { ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native';

import { KeyboardAvoidingViewWrapper } from '@/components';
import { COLORS } from '@/constants';
import { SearchResultList, useSearchUsers } from '@/features/users';
import { Suspense } from 'react';

export default function SearchScreen() {
    const { users, isLastPage, isLoading, handleChangeSearchUsersPage } = useSearchUsers();

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingViewWrapper>
                {/* <View style={{ marginTop: headerHeight }}> */}
                <Suspense fallback={<ActivityIndicator size={'large'} />}>
                    <SearchResultList searchResults={users} />
                </Suspense>
            </KeyboardAvoidingViewWrapper>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.GRAY_241_241_242_1,
    },
});
