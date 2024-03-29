export const ICONS = {
    HOME_OUTLINE: 'home-outline',
    HOME: 'home-sharp',
    VIDEOCAM: 'videocam',
    VIDEOCAM_OUTLINE: 'videocam-outline',
    PEOPLE: 'people',
    PEOPLE_OUTLINE: 'people-outline',
    USER_OUTLINE: 'person-circle-outline',
    USER: 'person-circle',
    SEARCH: 'search',
    MESSAGE: 'chatbubbles-outline',
    IMAGE: 'image',
    HEART_OUTLINE: 'heart-outline',
    HEART: 'heart',
    COMMENT: 'chatbubble-ellipses-outline',
    NOTIFICATION_OUTLINE: 'notifications-outline',
    NOTIFICATION: 'notifications',
    BACK: 'chevron-back',
    CLOSE_CIRCLE_OUTLINE: 'close-circle-outline',
    EYE_OUTLINE: 'eye-outline',
    EYE_OFF_OUTLINE: 'eye-off-outline',
    ADD: 'add-circle-outline',
    RELOAD: 'reload',
    CHECK_OUTLINE: 'checkmark-circle-outline',
    SEND: 'send',
    MAIL: 'mail-outline',
    LOGOUT: 'log-in-outline',
    CALL: 'call-outline',
};

export const SCREEN_TAB_BAR_ICONS = {
    home: {
        active: ICONS.HOME,
        inactive: ICONS.HOME_OUTLINE,
    },
    notification: {
        active: ICONS.NOTIFICATION,
        inactive: ICONS.NOTIFICATION_OUTLINE,
    },
    profile: {
        active: ICONS.USER,
        inactive: ICONS.USER_OUTLINE,
    },
};

export type ScreenTabBarIcon = keyof typeof SCREEN_TAB_BAR_ICONS;
