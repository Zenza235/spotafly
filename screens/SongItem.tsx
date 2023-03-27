import React from "react";
import { View, Text, Image } from "react-native";

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
            <Text>{song}</Text>
            <Text>{artist}</Text>
            <CoverImage filename={imageFilenames[parseInt(imageID)]} source={imageSources[parseInt(imageID)]}/>
        </View>
    );
};
// DONT USE DYNAMIC REQUIRE..
// this implementation may not even work
// we should probably use IDs and then make a List of Node Requires so we require all images when app is run in beggining.

// TODO: fix tailwind className issue
const CoverImage: React.FC<{
    filename: string
    source : NodeRequire
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