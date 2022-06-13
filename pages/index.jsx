import IndexMeta from "../components/index/IndexMeta";
import Hero from "../components/index/Hero";
import { IconBrandDiscord } from "@tabler/icons";
import Members from "../components/index/Members";
import Rules from "../components/index/Rules";

export default function Home() {
    return (
        <>
            <IndexMeta />
            <main>
                <div className="index-wrapper">
                    <Hero />
                    <Members />
                    <Rules />
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
