import { Image, StyleSheet, View, ActivityIndicator } from 'react-native';
import React from 'react';
import AuthorRow from './AuthorRow';
export default class Card extends React.Component {
    state = {
        loading: true
    }
    handleLoad = () => {
        this.setState({
            loading: false
        })
    }
    shouldComponentUpdate(nextProps){
        return this.props.linkText!==nextProps.linkText;
    }
    render() {
        const { fullname, image, linkText, onPressLinkText } = this.props;
        const { loading } = this.state;
        return (
            <View>
                <AuthorRow
                    fullname={fullname}
                    linkText={linkText}
                    onPressLinkText={onPressLinkText}
                />
                <View style={styles.image}>
                    {loading && (
                        <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'} />
                    )}
                    <Image style={StyleSheet.absoluteFill} source={image} onLoad={this.handleLoad}>

                    </Image>
                </View>
            </View>
        );
    }
}
Card.defaultProps = {
    linkText: '',
    onPressLinkText: () => { },
};
const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        backgroundColor: 'rgba(0,0,0,0.02)',
    },
});