import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Queen Of Nature",
        short_name: "Queen Of Nature",
        description:
            "เป็นแบรนด์เล็ก ๆ ที่เริ่มต้นจากความสนใจ เริ่มศึกษา จนนำมาสู่การทำผลิตภัณฑ์ต่าง ๆ เป็นงานอดิเรก และพัฒนาผลิตภัณฑ์ให้ดียิ่งขึ้น โดยจะใช้สารสกัดจากธรรมชาติ ไม่สังเคราะห์ ให้ความรู้สึก และสัมผัสจากธรรมชาติ",
        start_url: "/",
        display: "standalone",
        background_color: "#181818",
        theme_color: "#fff",
    }
}
