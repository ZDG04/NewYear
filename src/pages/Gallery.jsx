import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

const photos = [
    {
        src: "/image1_800x600.jpg",
        width: 800,
        height: 600,
        srcSet: [
            { src: "/image1_400x300.jpg", width: 400, height: 300 },
            { src: "/image1_200x150.jpg", width: 200, height: 150 },
        ],
    },
    {
        src: "/image2_1600x900.jpg",
        width: 1600,
        height: 900,
        srcSet: [
            { src: "/image2_800x450.jpg", width: 800, height: 450 },
            { src: "/image2_400x225.jpg", width: 400, height: 225 },
        ],
    },
];

export default function Gallery() {
    return (
        <RowsPhotoAlbum
            photos={photos}
            sizes={{
                size: "1168px",
                sizes: [
                    {
                        viewport: "(max-width: 1200px)",
                        size: "calc(100vw - 32px)",
                    },
                ],
            }}
        />
    );
}