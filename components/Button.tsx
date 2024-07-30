import { DANGER, GRAY, PRIMARY, WHITE } from '@/constants/Colors';
import PropTypes from 'prop-types';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';

interface Props{
    title: string;
    styles:object;
    onPress: () => void;
    disabled: boolean;
    isLoading:boolean;
}

export const ButtonTypes = {
    PRIMARY:'PRIMARY',
    DANGER: 'DANGER',
    CANCEL: 'CANCEL',
};

const ButtonTypeColors = {
    PRIMARY: {
        DEFAULT:PRIMARY.DEFAULT,
        LIGHT: PRIMARY.LIGHT,
        DARK:PRIMARY.DARK,
    },
    DANGER: {
        DEFAULT:DANGER.DEFAULT,
        LIGHT: DANGER.LIGHT,
        DARK:DANGER.DARK,
    },
    CANCEL: {
        DEFAULT:GRAY.DEFAULT,
        LIGHT: GRAY.LIGHT,
        DARK:GRAY.DARK,
    },
};

const Button = ({title, styles, onPress, disabled, isLoading,buttonType, }) => {
    const Colors = ButtonTypeColors[buttonType];
    return(
        <View style={[defaultStyles.contaianer, styles?.container]}>
            <Pressable 
            onPress={() => onPress()}
            disabled={disabled || isLoading}
            style={({pressed}) => [
                defaultStyles.button,
                {
                    backgroundColor: (() => {
                        switch (true) {
                            case disabled || isLoading:
                                return Colors.LIGHT;
                            case pressed:
                                return Colors.DARK;
                            default:
                                return Colors.DEFAULT;
                        }
                    })(),
                },
                styles?.button,
            ]}>
                {isLoading ? (
                    <ActivityIndicator size="small" color={GRAY.DARK} />
                ) : (
                    <Text style={[defaultStyles.title, styles?.title]}>{title}</Text>
                )}
                
            </Pressable>
        </View>
    );
};

Button.defaultProps = {
    buttonType:ButtonTypes.PRIMARY,
}

Button.propTypes = {
    styles:PropTypes.object,
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    disabled : PropTypes.bool,
    isLoading : PropTypes.bool,
    buttonType : PropTypes.oneOf(Object.values(ButtonTypes)),
};

const defaultStyles = StyleSheet.create({
    contaianer:{
        width:'100%',
        //paddingHorizontal:20,
        //marginTop:20,
    },
    button:{
        paddingVertical:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    },
    title:{
        color:WHITE,
        fontSize: 16,
        fontWeight:'700',
        lineHeight:20,
    }
})

export default Button;