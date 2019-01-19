import { SafeAreaView } from "react-native";
import React from "react";
import NavigationBar from "../NavigationBar";
import CommentInput from "../CommentInput";
import CommentList from "../CommentList";
export default function Comments({
    style,
    comments,
    onClose,
    onSubmitComment
}) {
    return (
        <SafeAreaView style={style}>
            <NavigationBar
                title="Comments"
                leftText="Close"
                onPressLeftText={onClose}
            />
            <CommentInput placeholder="Leave a comment" onSubmit={onSubmitComment} />
            <CommentList items={comments} />
        </SafeAreaView>
    )
}