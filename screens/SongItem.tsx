import React from "react";
import { View, Text, Image } from "react-native";

const SongItem: React.FC<{
    song: string,
    artist: string,
    image: string,
}> = ({song, artist, image}) => {
    return (
        // TODO: learn to format with flexbox
        <View>
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
        <Image
            className='w-150 h-150'
            src={require('../assets/cover/' + filename)}
        />
    );
}

export default SongItem;