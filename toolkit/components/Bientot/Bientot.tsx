import React from "react";
import Typewriter from "typewriter-effect";
import "./Bientot.css";

type Props = {};

const Bientot = (props: Props) => {
    return (
        <div className="container">
            <h1 className="title">SOURHENY</h1>
            <h1 className="comingSoon">
                <Typewriter
                    options={{
                        strings: [
                            "Bientôt disponible...",
                            "Coming Soon...",
                        ],
                        autoStart: true,
                        loop: true,

                    }}
                />
            </h1>
        </div>
    );
};

export default Bientot;
