import React from "react";
import { View, Text, Image, Pressable } from "react-native";
// TODO: use expo-av for audio

var imageFilenames = ["covers/metaverse_camellia.png"];
var imageSources = [require("../assets/covers/metaverse_camellia.png")];

const SongItem: React.FC<{
    song: string,
    artist: string,
    imageID: string,
    
}> = ({song, artist, imageID}) => {
    return (
        // TODO: learn to format with flexbox
        <View style={{backgroundColor: "#FFFFFF", alignItems: "flex-start"}}>
            <Pressable onPress={/>pulls up a modal (the bottom bar that shows currently playing audio)/}>
                <CoverImage filename={imageFilenames[parseInt(imageID)]}/>
                <Text>{song}</Text>
                <Text>{artist}</Text>
            </Pressable>
        </View>
    );
};
//<CoverImage filename={imageFilenames[parseInt(imageID)]} source={imageSources[parseInt(imageID)]}/>
// DONT USE DYNAMIC REQUIRE..
// this implementation may not even work
// we should probably use IDs and then make a List of Node Requires so we require all images when app is run in beggining.

const CoverImage: React.FC<{
    filename: string
}> = (filename) => {
    return (
        <View>
        <Image
            source={require("../assets/covers/metaverse_camellia.png")}
        />
        </View>
    );
}

export default SongItem;
//require("../assets/covers/" + filename)r