import ja from "@/shared/i18n/ja"
import { routingType } from "@/shared/types/routing"

export const routingPage: routingType[] = [
    {
        url: "/pictureMenu",
        title: ja.routingPage.pictureMenu,
    },
    {
        url: "/dummyText",
        title: ja.routingPage.dummyText,
    },
    {
        url: "/randomPicture",
        title: ja.randomPicture.title,
    },
    {
        url: "/pictureMenu2",
        title: ja.routingPage.picture2,
    },
    {
        url: "/dragItems1",
        title: "ドラッグリスト1",
    },
    {
        url: "/dragItems2",
        title: "ドラッグリスト2",
    },
    {
        url: "/tabMenu",
        title: "タブメニュー",
    },
    {
        url: "/popup",
        title: "グローバルポップアップ",
    },
]
