import Image from "next/image";
import IndexMeta from "../components/index/IndexMeta";
import Logo from "../public/img/logo.svg";
import ArtIcon from "../public/img/index/art.svg";
import GraphicsIcon from "../public/img/index/graphics.svg";
import CodeIcon from "../public/img/index/code.svg";
import VideoIcon from "../public/img/index/video.svg";
import WritingIcon from "../public/img/index/writing.svg";

export default function Home() {
    return (
        <>
            <IndexMeta />
            <main>
                <div className="index-wrapper">
                    <div className="logo">
                        <Image
                            src={Logo}
                            quality="100"
                            objectFit="fill"
                            alt="logo"
                            priority
                        />
                    </div>
                    <div className="icons-desc">
                        art · graphics · code · video · writing
                    </div>
                    <div className="icons">
                        <div className="icons__art">
                            <div className="svg-wrapper">
                                <Image
                                    src={ArtIcon}
                                    quality="100"
                                    objectFit="fill"
                                    alt="art"
                                />
                            </div>
                        </div>
                        <div className="icons__graphics">
                            <div className="svg-wrapper">
                                <Image
                                    src={GraphicsIcon}
                                    quality="100"
                                    objectFit="fill"
                                    alt="graphics"
                                />
                            </div>
                        </div>
                        <div className="icons__code">
                            <div className="svg-wrapper">
                                <Image
                                    src={CodeIcon}
                                    quality="100"
                                    objectFit="fill"
                                    alt="code"
                                />
                            </div>
                        </div>
                        <div className="icons__video">
                            <div className="svg-wrapper">
                                <Image
                                    src={VideoIcon}
                                    quality="100"
                                    objectFit="fill"
                                    alt="video"
                                />
                            </div>
                        </div>
                        <div className="icons__writing">
                            <div className="svg-wrapper">
                                <Image
                                    src={WritingIcon}
                                    quality="100"
                                    objectFit="fill"
                                    alt="writing"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        A Discord community for creative works related to
                        Japanese media!
                    </div>
                    <div className="join">
                        <a href="https://discord.gg/xwJuJawYFz">Join now!</a>
                    </div>
                </div>
            </main>
        </>
    );
}
