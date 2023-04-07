export class UserList {
    userList = [
        {
            id: "6a71bc2e88caac3a",
            name: "Dhinesh",
            age: 24,
            bio: "Need someone to go snowboarding with!",
            interests: "",
            lookingfor: "",
            pfp: "/assets/UserIcons/dhinesh24.png",
            imgs: [] as string[]
        },
        {
            id: "18024b47a19a60f9",
            name: "Brandon",
            age: 22,
            bio: "D&D player, gamer, recreational wizard",
            interests: "",
            lookingfor: "",
            pfp: "../assets/UserIcons/brandon22.jfif",
            imgs: [] as string[]
        },
        {
            id: "9a660cf49a8f94bc",
            name: "Hillary",
            age: 18,
            bio: "You may be cool, but you'll never be as cool as my hat",
            interests: "",
            lookingfor: "",
            pfp: "../assets/UserIcons/hillary18.jfif",
            imgs: [] as string[]
        },
        {
            id: "0606e6c58d13aeb7",
            name: "Luka",
            age: 23,
            bio: "History buff, not very buff",
            interests: "",
            lookingfor: "",
            pfp: "../assets/UserIcons/luka23.jfif",
            imgs: [] as string[]
        },
        {
            id: "9679868696596863",
            name: "Sarah",
            age: 26,
            bio: "Who's caught up in Game of Thrones?",
            interests: "",
            lookingfor: "",
            pfp: "../assets/UserIcons/sarah26.jfif",
            imgs: [] as string[]
        },
        {
            id: "039f893e85689ea7",
            name: "Rebecca",
            age: 25,
            bio: "I love watchin the Office with my cat",
            interests: "",
            lookingfor: "",
            pfp: "../assets/UserIcons/rebecca25.jfif",
            imgs: [] as string[]
        },
        {
            id: "5b0849bccd5457af",
            name: "Alejandro",
            age: 20,
            bio: "Let's be friends!",
            interests: "",
            lookingfor: "",
            pfp: "../assets/UserIcons/alejandro20.jfif",
            imgs: [] as string[]
        },
        {
            id: "70713db532e75e84",
            name: "Jared",
            age: 19,
            bio: "I never learned how to read",
            interests: "",
            lookingfor: "",
            pfp: "../assets/UserIcons/jared19.jfif",
            imgs: [] as string[]
        },
        {
            id: "88ea6321caef4076",
            name: "Pietro",
            age: 21,
            bio: "Avid bird enthusiast and park enjoyer",
            interests: "",
            lookingfor: "",
            pfp: "../assets/UserIcons/pietro21.jfif",
            imgs: [] as string[]
        },
        {
            id: "e6b7b5cac4167c4a",
            name: "Connor",
            age: 24,
            bio: "",
            interests: "",
            lookingfor: "",
            pfp: "../assets/UserIcons/connor24.jfif",
            imgs: [] as string[]
        },
        {
            id: "35bcfd8e45e400ba",
            name: "Frank",
            age: 22,
            bio: "",
            interests: "",
            lookingfor: "",
            pfp: "../assets/UserIcons/frank22.png",
            imgs: [] as string[]
        },
        {
            id: "a88429b319467806",
            name: "Bridgit",
            age: 19,
            bio: "",
            interests: "",
            lookingfor: "",
            pfp: "../assets/UserIcons/bridgit19.jfif",
            imgs: [] as string[]
        },
        {
            id: "a766b214644a87ed",
            name: "Jere",
            age: 27,
            bio: "",
            interests: "",
            lookingfor: "",
            pfp: "../assets/UserIcons/jere27.jfif",
            imgs: [] as string[]
        },
        {
            id: "a442811870a83517",
            name: "Jamie",
            age: 24,
            bio: "",
            interests: "",
            lookingfor: "",
            pfp: "../assets/UserIcons/jamie24.jfif",
            imgs: [] as string[]
        },
        {
            id: "cb39dffc3202beef",
            name: "Kylie",
            age: 23,
            bio: "",
            interests: "",
            lookingfor: "",
            pfp: "../assets/UserIcons/kylie23.jfif",
            imgs: [] as string[]
        },
        {
            id: "83cf9797fbfebe38",
            name: "Jeff",
            age: 21,
            bio: "Just another physics nerd looking to meet other cool nerdy people!",
            interests: "",
            lookingfor: "",
            pfp: "../assets/UserIcons/jeff21.jfif",
            imgs: [
                "../assets/UserPictures/CollegeFun.jpeg",
                "../assets/UserPictures/RocketLaunch.jpg"
            ] as string[]
        },
    ];

    getUser(id: string) {
        for (let i = 0; i < this.userList.length; i++) {
            if (this.userList[i].id === id) {
                return this.userList[i];
            }
        }
        return null as any;
    }
}