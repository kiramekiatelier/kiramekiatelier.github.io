import Image from "next/image";
import IndexMeta from "../components/index/IndexMeta";
import Logo from "../public/img/logo.svg";
import ArtIcon from "../public/img/index/art.svg";
import GraphicsIcon from "../public/img/index/graphics.svg";
import CodeIcon from "../public/img/index/code.svg";
import VideoIcon from "../public/img/index/video.svg";
import WritingIcon from "../public/img/index/writing.svg";
import {
    IconBrandDiscord,
    IconBrandTwitter,
    IconBrandGithub,
    IconPalette,
    IconVectorBezier2,
    IconCode,
    IconMovie,
    IconEdit,
    IconCrown
} from "@tabler/icons";

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
                            A Discord community for creative works related to
                            Japanese media!
                        </p>
                        <div className="join">
                            <a href="https://discord.gg/xwJuJawYFz">
                                <IconBrandDiscord strokeWidth={1.9} size={20} />
                                Join now!
                            </a>
                        </div>
                    </section>
                    <section className="section-members">
                        <h2>Featured Creators</h2>
                        <ul className="members">
                            {[
                                {
                                    name: "Ren",
                                    twitter: "riamuyumemi",
                                    github: "watatomo",
                                    fields: [
                                        IconPalette,
                                        IconVectorBezier2,
                                        IconCode,
                                        IconMovie
                                        // IconEdit
                                    ],
                                    mod: true
                                },
                                {
                                    name: "Remi",
                                    twitter: "trystofstarrs",
                                    github: "himemiyas",
                                    fields: [
                                        IconPalette,
                                        IconVectorBezier2,
                                        // IconCode,
                                        IconMovie
                                        // IconEdit
                                    ],
                                    mod: true
                                },
                                {
                                    name: "Yuu",
                                    twitter: "finderforehead",
                                    github: "yuuukun",
                                    fields: [
                                        // IconPalette,
                                        IconVectorBezier2,
                                        IconCode,
                                        IconMovie
                                        // IconEdit
                                    ],
                                    mod: true
                                }
                            ].map((m) => (
                                <li key={m.name} className="member">
                                    <div className="member-icon">
                                        <Image
                                            width={72}
                                            height={72}
                                            src={`https://unavatar.io/twitter/${m.twitter}`}
                                            alt={`${m.name}'s Icon`}
                                        />
                                    </div>
                                    <h3 className="member-name">
                                        {m.name}
                                        {m.mod && (
                                            <span className="member-mod">
                                                <IconCrown
                                                    size="14"
                                                    strokeWidth={2.5}
                                                />
                                            </span>
                                        )}
                                    </h3>
                                    <div className="member-fields">
                                        {m.fields.map((Icon) => (
                                            <Icon key={Icon} size={18} />
                                        ))}
                                    </div>
                                    <div className="member-links">
                                        <a
                                            className="member-twitter"
                                            href={`https://twitter.com/${m.twitter}`}
                                        >
                                            <IconBrandTwitter
                                                strokeWidth={1.9}
                                                size={18}
                                            />{" "}
                                            {m.twitter}
                                        </a>
                                        <a
                                            className="member-github"
                                            href={`https://githuh.com/${m.github}`}
                                        >
                                            <IconBrandGithub
                                                strokeWidth={1.9}
                                                size={18}
                                            />{" "}
                                            {m.github}
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className="section-rules">
                        <h2>Rules</h2>
                        <ul>
                            <li>
                                <h3>
                                    Abide by Discord&apos;s Terms and Community
                                    Guidelines
                                </h3>
                                <p>
                                    You can see them at{" "}
                                    <a href="https://discord.com/terms">
                                        https://discord.com/terms
                                    </a>{" "}
                                    and{" "}
                                    <a href="https://discord.com/guidelines">
                                        https://discord.com/guidelines
                                    </a>
                                    . In short: be respectful, don&apos;t doxx
                                    people, and don&apos;t do illegal things.
                                </p>
                            </li>
                            <li>
                                <h3>Maintain mutual respect to all parties.</h3>
                                <p>
                                    Be nice, be polite, and respect other
                                    people&apos;s opinions. Do not post any hate
                                    messages targeted at anyone, or threaten to
                                    self-harm, harm someone, or doxx someone,
                                    even as a joke.
                                </p>
                            </li>
                            <li>
                                <h3>Keep the conversation relevant.</h3>
                                <p>
                                    This is a server aimed at creating media of
                                    all kinds; light chitchat is fine in most
                                    channels, but please keep general
                                    discussions outside this server. We have a
                                    few other related servers listed in #info.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    Please use English in your communication.
                                </h3>
                                <p>
                                    We currently do not have the capacity to
                                    moderate in any other language, so please
                                    keep your conversation in English. Media of
                                    other languages are fine, as long as they
                                    abide by all the rules.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    Fan content not created by you must be
                                    properly attributed.
                                </h3>
                                <p>
                                    Just a Twitter or Pixiv link is fine. If you
                                    really can&apos;t find the source, at least
                                    don&apos;t claim it as your own work. And
                                    no, Pinterest links don&apos;t help,
                                    unfortunately.
                                </p>
                            </li>
                            <li>
                                <h3>
                                    Keep the server safe for members of all
                                    ages.
                                </h3>
                                <p>
                                    This server includes people from all ages,
                                    including minors, so sexual or explicit
                                    content are not allowed. Keep the place SFW,
                                    please!
                                </p>
                            </li>
                            <li>
                                <h3>
                                    Moderators have final say in any decision
                                    related to the server.
                                </h3>
                                <p>
                                    ※These rules are based off the Official
                                    Engstars Discord&apos;s, but may be modified
                                    and change at any time. It&apos;s pretty
                                    much a cut-down version of it—hopefully the
                                    rest can be common sense to everyone. TLDR,
                                    be nice, keep it SFW, and have fun!
                                </p>
                            </li>
                        </ul>
                    </section>

                    <div className="join">
                        <a href="https://discord.gg/xwJuJawYFz">
                            <IconBrandDiscord strokeWidth={1.9} size={20} />
                            Join now!
                        </a>
                    </div>
                    <footer className="section-footer">
                        <p>
                            ©2022 Kirameki Atelier. Designed and developed by
                            Remi, Ren, Yuu. All rights reserved.
                        </p>
                    </footer>
                </div>
            </main>
        </>
    );
}
