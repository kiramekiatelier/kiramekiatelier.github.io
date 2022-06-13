import Image from "../../../components/Image";
import Logo from "../../../public/img/logo.svg";
import ArtIcon from "../../../public/img/index/art.svg";
import GraphicsIcon from "../../../public/img/index/graphics.svg";
import CodeIcon from "../../../public/img/index/code.svg";
import VideoIcon from "../../../public/img/index/video.svg";
import WritingIcon from "../../../public/img/index/writing.svg";
import { IconBrandDiscord } from "@tabler/icons";

function Hero() {
    return (
        <>
            <div className="logo">
                <Image
                    src={Logo}
                    quality="100"
                    objectFit="fill"
                    alt="logo"
                    priority
                />
            </div>
            <section className="section-icons">
                <div className="icons-desc">
                    <div>art · graphics · code · video · writing</div>
                </div>
                <div className="icons">
                    {[
                        { icon: ArtIcon, name: "Art" },
                        { icon: GraphicsIcon, name: "Graphics" },
                        { icon: CodeIcon, name: "Code" },
                        { icon: VideoIcon, name: "Video" },
                        { icon: WritingIcon, name: "Writing" }
                    ].map((i) => (
                        <div
                            key={i.name}
                            className={"icons__" + i.name.toLowerCase()}
                        >
                            <div className="svg-wrapper">
                                <Image
                                    src={i.icon}
                                    quality="100"
                                    objectFit="fill"
                                    alt={i.name}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="section-description">
                <p className="description">
                    A Discord community for creative works related to Japanese
                    media!
                </p>
                <div className="join">
                    <a href="https://discord.gg/xwJuJawYFz">
                        <IconBrandDiscord strokeWidth={1.9} size={20} />
                        Join now!
                    </a>
                </div>
            </section>
        </>
    );
}

export default Hero;
