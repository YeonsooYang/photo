
import PropTypes from 'prop-types';
import { Keyboard, KeyboardAvoidingView, Platform, Pressable } from 'react-native';

const SafeInputView = ({children}:any) => {
    return(
        <KeyboardAvoidingView
            style={{flex:1}}
            behavior={Platform.select({ios:'padding'})}
        >
            <Pressable style={{flex:1}} onPress={() => Keyboard.dismiss()}>
                {children}
            </Pressable>
        </KeyboardAvoidingView>
    )
}

SafeInputView.propTypes = {
    children: PropTypes.node,
}

export default SafeInputView;