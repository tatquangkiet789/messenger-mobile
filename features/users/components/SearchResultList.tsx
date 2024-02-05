import { memo } from 'react';
import { User } from '../entities/user';
import UserCard from './UserCard';

type SearchResultListProps = {
    users: User[];
    isLoading: boolean;
};

const SearchResultList = memo(function SearchResultList({
    users,
    isLoading,
}: SearchResultListProps) {
    return (
        <>
            {isLoading ? (
                <>Loading...</>
            ) : (
                <>
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </>
            )}
        </>
    );
});

export default SearchResultList;
