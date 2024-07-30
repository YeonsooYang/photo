import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { GRAY, PRIMARY } from '@/constants/Colors';


const HeaderRight = ({disabled,onPress}) => {

    return(
        <Pressable
        hitSlop={10}
        disabled={disabled}
        onPress={onPress}
        >
            <MaterialCommunityIcons
                name="check"
                size={24}
                color={disabled ? GRAY.DEFAULT: PRIMARY.DEFAULT}
            />
        </Pressable>
    );
};

HeaderRight.defaultProps = {
    disabled: PropTypes.bool,
    onPress:PropTypes.func,
}

export default HeaderRight;