export type TSocialIcon = {
    img: string;
    link: string;
    style: {
        width: string;
        height: string;
    }
};

export const socialIcons: Array<TSocialIcon> = [
    {
        img: require("../public/images/newINST.svg"),
        link: "https://vk.com/club194548204",
        style: {
            width: "26px",
            height: "26px",
        }
    },
    {
        img: require("../public/images/newFB.svg"),
        link: "https://www.facebook.com/ooomikprom/?modal=admin_todo_tour",        style: {
            width: "26px",
            height: "26px",
        }
    },
    {
        img: require("../public/images/newYT.svg"),
        link: "https://www.youtube.com/channel/UCiCufEUCSmAVxjC9bfaCLRQ",        style: {
            width: "34px",
            height: "24px",
        }
    },
    {
        img: require("../public/images/newVK.svg"),
        link: "https://vk.com/club194548204",
        style: {
            width: "26px",
            height: "26px",
        }
    }
];
