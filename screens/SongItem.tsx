import React from "react";
import { View, Text, Image } from "react-native";

const SongItem: React.FC<{
    song: string,
    artist: string,
    image: string,
}> = ({song, artist, image}) => {
    return (
        <View className="flex">
            <CoverImage className="w-1/4" filename={image}/>
            <View className="w-3/4">
                <Text className="text-title">{song}</Text>
                <Text className="text-header">{artist}</Text>
            </View>
        </View>
    );
};

const CoverImage: React.FC<{
    filename: string
}> = (filename) => {
    return (
        <Image
            className="w-150 h-150"
            source={require("../assets/cover/" + filename)}
        />
    );
}

export default SongItem;