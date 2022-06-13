import Image from "../../../components/Image";
import {
    IconBrandTwitter,
    IconBrandGithub,
    IconPalette,
    IconVectorBezier2,
    IconCode,
    IconMovie,
    // IconEdit,
    IconCrown
} from "@tabler/icons";

function Members() {
    return (
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
                                    <IconCrown size="14" strokeWidth={2.5} />
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
                                <IconBrandTwitter strokeWidth={1.9} size={18} />{" "}
                                {m.twitter}
                            </a>
                            <a
                                className="member-github"
                                href={`https://github.com/${m.github}`}
                            >
                                <IconBrandGithub strokeWidth={1.9} size={18} />{" "}
                                {m.github}
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Members;
