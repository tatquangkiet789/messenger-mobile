import { Chat } from './features/chats';
import { Message } from './features/messages';
import { Notification } from './features/notifications';
import { SearchUser, User } from './features/users';

export const createMessage: Message = {
    id: 200,
    content: 'Create message',
    parentID: null,
    messageTypeID: 1,
    senderDetail: {
        id: 4,
        avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
    },
    receiverDetail: {
        id: 2,
        avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
    },
};

export const messages: Message[] = [
    {
        id: 154,
        content:
            'Testddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
        parentID: null,
        messageTypeID: 1,
        senderDetail: {
            id: 2,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
        },
        receiverDetail: {
            id: 4,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
        },
    },
    {
        id: 155,
        content:
            'Test5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555',
        parentID: null,
        messageTypeID: 1,
        senderDetail: {
            id: 4,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
        },
        receiverDetail: {
            id: 2,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
        },
    },
    {
        id: 156,
        content: 'Test',
        parentID: null,
        messageTypeID: 1,
        senderDetail: {
            id: 2,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
        },
        receiverDetail: {
            id: 4,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
        },
    },
    {
        id: 157,
        content:
            'https://res.cloudinary.com/dnwauajh9/image/upload/v1694515923/keum2la8eqohbtrakezu.jpg',
        parentID: null,
        messageTypeID: 2,
        senderDetail: {
            id: 2,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
        },
        receiverDetail: {
            id: 4,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
        },
    },
    {
        id: 158,
        content:
            'https://res.cloudinary.com/dnwauajh9/image/upload/v1694516046/agiwwucqtjrofcutxa4g.jpg',
        parentID: null,
        messageTypeID: 2,
        senderDetail: {
            id: 4,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
        },
        receiverDetail: {
            id: 2,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
        },
    },
    {
        id: 159,
        content:
            'https://res.cloudinary.com/dnwauajh9/image/upload/v1694516116/anfoh9vtxlwj5x18lhks.jpg',
        parentID: null,
        messageTypeID: 2,
        senderDetail: {
            id: 4,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
        },
        receiverDetail: {
            id: 2,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
        },
    },
    {
        id: 160,
        content:
            'https://res.cloudinary.com/dnwauajh9/image/upload/v1694516222/kfjg7v81zbyq8je4ogfe.jpg',
        parentID: null,
        messageTypeID: 2,
        senderDetail: {
            id: 4,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
        },
        receiverDetail: {
            id: 2,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
        },
    },
    {
        id: 161,
        content: 'Test',
        parentID: null,
        messageTypeID: 1,
        senderDetail: {
            id: 4,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
        },
        receiverDetail: {
            id: 2,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
        },
    },
    {
        id: 162,
        content:
            'https://res.cloudinary.com/dnwauajh9/image/upload/v1694516400/se6puyxvtyfuqp1nmvuo.jpg',
        parentID: null,
        messageTypeID: 2,
        senderDetail: {
            id: 2,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
        },
        receiverDetail: {
            id: 4,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
        },
    },
    {
        id: 163,
        content:
            'https://res.cloudinary.com/dnwauajh9/image/upload/v1694516548/ihcxzh58urgt7e6e45ty.jpg',
        parentID: null,
        messageTypeID: 2,
        senderDetail: {
            id: 2,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
        },
        receiverDetail: {
            id: 4,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
        },
    },
    {
        id: 164,
        content: 'Testing',
        parentID: null,
        messageTypeID: 1,
        senderDetail: {
            id: 2,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
        },
        receiverDetail: {
            id: 4,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
        },
    },
    {
        id: 165,
        content:
            'https://res.cloudinary.com/dnwauajh9/image/upload/v1694517119/g9yoam6pefqcrdek7xtz.jpg',
        parentID: null,
        messageTypeID: 2,
        senderDetail: {
            id: 2,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
        },
        receiverDetail: {
            id: 4,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
        },
    },
    {
        id: 166,
        content:
            'https://res.cloudinary.com/dnwauajh9/image/upload/v1694517148/d7kfajdobd2d8yld6v4x.jpg',
        parentID: null,
        messageTypeID: 2,
        senderDetail: {
            id: 4,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
        },
        receiverDetail: {
            id: 2,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
        },
    },
    {
        id: 179,
        content: 'Test',
        parentID: null,
        messageTypeID: 1,
        senderDetail: {
            id: 4,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
        },
        receiverDetail: {
            id: 2,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
        },
    },
    {
        id: 180,
        content: 'Test',
        parentID: null,
        messageTypeID: 1,
        senderDetail: {
            id: 4,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
        },
        receiverDetail: {
            id: 2,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
        },
    },
    {
        id: 181,
        content: 'Trả lời message có messageID là 180',
        parentID: 180,
        messageTypeID: 1,
        senderDetail: {
            id: 2,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
        },
        receiverDetail: {
            id: 4,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
        },
    },
    {
        id: 192,
        content: 'Trả lời message có messageID là 181',
        parentID: 181,
        messageTypeID: 1,
        senderDetail: {
            id: 2,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
        },
        receiverDetail: {
            id: 4,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
        },
    },
    {
        id: 193,
        content: 'Create message',
        parentID: null,
        messageTypeID: 1,
        senderDetail: {
            id: 2,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
        },
        receiverDetail: {
            id: 4,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
        },
    },
    {
        id: 194,
        content: 'Create child message',
        parentID: 193,
        messageTypeID: 1,
        senderDetail: {
            id: 2,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
        },
        receiverDetail: {
            id: 4,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
        },
    },
    {
        id: 209,
        content: 'Create message FE',
        parentID: null,
        messageTypeID: 1,
        senderDetail: {
            id: 4,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
        },
        receiverDetail: {
            id: 2,
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314255/test-image_v8qyrs.jpg',
        },
    },
];

export const user: User = {
    id: 4,
    firstName: 'Shogun',
    lastName: 'Raiden',
    isVerified: true,
    username: 'raiden.shogun',
    userRoleName: 'USER',
    avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
};

export const addFriendNotifications: Notification[] = [
    {
        id: 1,
        content: 'đã gửi lời mời kết bạn',
        notificationTypeID: 1,
        notificationSenderDetail: {
            id: 3,
            firstName: 'Ayaka',
            lastName: 'Kamisato',
            username: 'user2',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1639924232/default-image_gvztol.jpg',
            isVerified: true,
            userRoleName: 'User',
        },
        notificationReceiverDetail: {
            id: 4,
            firstName: 'Vi',
            lastName: 'Nguyễn Thị Hà',
            username: 'user3',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
            isVerified: true,
            userRoleName: 'User',
        },
    },
    {
        id: 2,
        content: 'đã gửi lời mời kết bạn',
        notificationTypeID: 1,
        notificationSenderDetail: {
            id: 5,
            firstName: 'C6',
            lastName: 'QiQi',
            username: 'user4',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
            isVerified: true,
            userRoleName: 'User',
        },
        notificationReceiverDetail: {
            id: 4,
            firstName: 'Vi',
            lastName: 'Nguyễn Thị Hà',
            username: 'user3',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
            isVerified: true,
            userRoleName: 'User',
        },
    },
    {
        id: 21,
        content: 'đã gửi lời mời kết bạn',
        notificationTypeID: 1,
        notificationSenderDetail: {
            id: 5,
            firstName: 'C6',
            lastName: 'QiQi',
            username: 'user4',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
            isVerified: true,
            userRoleName: 'User',
        },
        notificationReceiverDetail: {
            id: 4,
            firstName: 'Vi',
            lastName: 'Nguyễn Thị Hà',
            username: 'user3',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
            isVerified: true,
            userRoleName: 'User',
        },
    },
    {
        id: 3,
        content: 'đã gửi lời mời kết bạn',
        notificationTypeID: 1,
        notificationSenderDetail: {
            id: 5,
            firstName: 'C6',
            lastName: 'QiQi',
            username: 'user4',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
            isVerified: true,
            userRoleName: 'User',
        },
        notificationReceiverDetail: {
            id: 4,
            firstName: 'Vi',
            lastName: 'Nguyễn Thị Hà',
            username: 'user3',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
            isVerified: true,
            userRoleName: 'User',
        },
    },
    {
        id: 4,
        content: 'đã gửi lời mời kết bạn',
        notificationTypeID: 1,
        notificationSenderDetail: {
            id: 5,
            firstName: 'C6',
            lastName: 'QiQi',
            username: 'user4',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
            isVerified: true,
            userRoleName: 'User',
        },
        notificationReceiverDetail: {
            id: 4,
            firstName: 'Vi',
            lastName: 'Nguyễn Thị Hà',
            username: 'user3',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
            isVerified: true,
            userRoleName: 'User',
        },
    },
    {
        id: 5,
        content: 'đã gửi lời mời kết bạn',
        notificationTypeID: 1,
        notificationSenderDetail: {
            id: 5,
            firstName: 'C6',
            lastName: 'QiQi',
            username: 'user4',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
            isVerified: true,
            userRoleName: 'User',
        },
        notificationReceiverDetail: {
            id: 4,
            firstName: 'Vi',
            lastName: 'Nguyễn Thị Hà',
            username: 'user3',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
            isVerified: true,
            userRoleName: 'User',
        },
    },
    {
        id: 6,
        content: 'đã gửi lời mời kết bạn',
        notificationTypeID: 1,
        notificationSenderDetail: {
            id: 5,
            firstName: 'C6',
            lastName: 'QiQi',
            username: 'user4',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
            isVerified: true,
            userRoleName: 'User',
        },
        notificationReceiverDetail: {
            id: 4,
            firstName: 'Vi',
            lastName: 'Nguyễn Thị Hà',
            username: 'user3',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
            isVerified: true,
            userRoleName: 'User',
        },
    },
    {
        id: 7,
        content: 'đã gửi lời mời kết bạn',
        notificationTypeID: 1,
        notificationSenderDetail: {
            id: 5,
            firstName: 'C6',
            lastName: 'QiQi',
            username: 'user4',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
            isVerified: true,
            userRoleName: 'User',
        },
        notificationReceiverDetail: {
            id: 4,
            firstName: 'Vi',
            lastName: 'Nguyễn Thị Hà',
            username: 'user3',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
            isVerified: true,
            userRoleName: 'User',
        },
    },
    {
        id: 9,
        content: 'đã gửi lời mời kết bạn',
        notificationTypeID: 1,
        notificationSenderDetail: {
            id: 5,
            firstName: 'C6',
            lastName: 'QiQi',
            username: 'user4',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
            isVerified: true,
            userRoleName: 'User',
        },
        notificationReceiverDetail: {
            id: 4,
            firstName: 'Vi',
            lastName: 'Nguyễn Thị Hà',
            username: 'user3',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
            isVerified: true,
            userRoleName: 'User',
        },
    },
    {
        id: 10,
        content: 'đã gửi lời mời kết bạn',
        notificationTypeID: 1,
        notificationSenderDetail: {
            id: 5,
            firstName: 'C6',
            lastName: 'QiQi',
            username: 'user4',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
            isVerified: true,
            userRoleName: 'User',
        },
        notificationReceiverDetail: {
            id: 4,
            firstName: 'Vi',
            lastName: 'Nguyễn Thị Hà',
            username: 'user3',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1694314407/avatar_qdxtmv.jpg',
            isVerified: true,
            userRoleName: 'User',
        },
    },
];

export const chats: Chat[] = [
    {
        user: {
            id: 1,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        latestMessage: {
            content: 'Mock dataddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
            messageTypeID: 1,
        },
    },
    {
        user: {
            id: 2,
            firstName: 'Vi',
            lastName: 'Nguyễn Thi Hà',
            isVerified: true,
            username: 'vi.nguyenthiha   ',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1675503302/qr5zsxkqcgc9bhvgxge3.png',
        },
        latestMessage: { content: 'Mock datadddddddddddddddddddddddddddddddddd', messageTypeID: 1 },
    },
    {
        user: {
            id: 3,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        latestMessage: { content: 'Mock data', messageTypeID: 1 },
    },
    {
        user: {
            id: 4,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        latestMessage: { content: 'Mock data', messageTypeID: 1 },
    },
    {
        user: {
            id: 5,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        latestMessage: { content: 'Mock data', messageTypeID: 1 },
    },
    {
        user: {
            id: 6,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        latestMessage: { content: 'Mock data', messageTypeID: 1 },
    },
    {
        user: {
            id: 7,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        latestMessage: { content: 'Mock data', messageTypeID: 1 },
    },
    {
        user: {
            id: 8,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        latestMessage: { content: 'Mock data', messageTypeID: 1 },
    },
    {
        user: {
            id: 9,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        latestMessage: { content: 'Mock data', messageTypeID: 1 },
    },
    {
        user: {
            id: 10,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        latestMessage: { content: 'Mock data', messageTypeID: 1 },
    },
    {
        user: {
            id: 11,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        latestMessage: { content: 'Mock data', messageTypeID: 1 },
    },
    {
        user: {
            id: 12,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        latestMessage: { content: 'Mock data', messageTypeID: 1 },
    },
];

export const searchResults: SearchUser[] = [
    {
        user: {
            id: 1,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        isSentAddFriendNotification: true,
    },
    {
        user: {
            id: 2,
            firstName: 'Vi',
            lastName: 'Nguyễn Thi Hà',
            isVerified: true,
            username: 'vi.nguyenthiha   ',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1675503302/qr5zsxkqcgc9bhvgxge3.png',
        },
        isSentAddFriendNotification: false,
    },
    {
        user: {
            id: 3,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        isSentAddFriendNotification: true,
    },
    {
        user: {
            id: 4,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        isSentAddFriendNotification: false,
    },
    {
        user: {
            id: 5,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        isSentAddFriendNotification: true,
    },
    {
        user: {
            id: 6,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        isSentAddFriendNotification: true,
    },
    {
        user: {
            id: 7,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        isSentAddFriendNotification: true,
    },
    {
        user: {
            id: 8,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        isSentAddFriendNotification: true,
    },
    {
        user: {
            id: 9,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        isSentAddFriendNotification: true,
    },
    {
        user: {
            id: 10,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        isSentAddFriendNotification: true,
    },
    {
        user: {
            id: 11,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        isSentAddFriendNotification: true,
    },
    {
        user: {
            id: 12,
            firstName: 'Shogun',
            lastName: 'Raiden',
            isVerified: true,
            username: 'raiden.shogun',
            userRoleName: 'USER',
            avatar: 'https://res.cloudinary.com/dnwauajh9/image/upload/v1703235528/cqk0dmky4xzlhtccuhvt.jpg',
        },
        isSentAddFriendNotification: true,
    },
];
