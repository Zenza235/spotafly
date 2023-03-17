import React from "react";
import { View, Text, Image } from "react-native";

const SongItem: React.FC<{
    song: string,
    artist: string,
    image: string,
}> = ({song, artist, image}) => {
    return (
        // TODO: learn to format with flexbox
        <View style={{backgroundColor: "#FFFFFF", alignItems: "flex-start"}}>
            <Text>{song}</Text>
            <Text>{artist}</Text>
            <CoverImage filename={image}/>
        </View>
    );
};

// TODO: fix tailwind className issue
const CoverImage: React.FC<{
    filename: string
}> = (filename) => {
    return (
        <View>
        <Image
            source={require("../assets/covers/" + filename)}
        />
        </View>
    );
}

export default SongItem;