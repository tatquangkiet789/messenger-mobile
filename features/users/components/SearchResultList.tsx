import { StyleSheet, VirtualizedList } from 'react-native';

import { SearchUser } from '../models/user';
import SearchResultItem from './SearchResultItem';

type SearchResultListProps = {
    searchResults: SearchUser[];
};

export default function SearchResultList({ searchResults }: SearchResultListProps) {
    function getItemCount(chats: SearchUser[]) {
        return chats.length;
    }

    function getItem(data: SearchUser[], index: number) {
        return data[index];
    }

    return (
        <VirtualizedList
            data={searchResults}
            getItem={getItem}
            getItemCount={getItemCount}
            keyExtractor={(item) => item.user.id.toString()}
            renderItem={({ item }) => (
                <SearchResultItem
                    user={item.user}
                    isSentAddFriendNotification={item.isSentAddFriendNotification}
                />
            )}
        />
    );
}

const styles = StyleSheet.create({});
