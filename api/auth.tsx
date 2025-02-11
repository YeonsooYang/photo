import {AuthErrorCodes, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const PHOTO_URL = '../o/profile.png?alt=media';

export const getAuthErrorMessages = (errorCode) => {
    switch (errorCode) {
        case AuthErrorCodes.USER_DELETED:
            return '계정을 찾을 수 없습니다.';
        case AuthErrorCodes.INVALID_EMAIL:
            return '유효하지 않은 이메일 주소입니다.';
        case AuthErrorCodes.INVALID_PASSWORD:
            return '잘못된 비밀번호 입니다.';
        default:
            return '로그인에 실패했습니다.';
    }
};

export const signIn = async({email, password}) => {
    const{user} = await signInWithEmailAndPassword(
        getAuth(),
        email,
        password
    );
    return user;
};

export const signUp = async({email, password}) => {
    const{user} = await createUserWithEmailAndPassword(
        getAuth(),
        email,
        password
    );
    await updateUserInfo({
        displayName:email.split('@')[0].slice(0,10),
        photoURL:PHOTO_URL,
    });

    return user;
};