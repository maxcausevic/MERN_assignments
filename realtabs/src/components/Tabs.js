import React, { useState } from "react";

const Tabs = (props) => {
    console.log(props);
    const [selectedTab, setSelectedTab] = useState(props.items[0]);
    return (
        <div className="container">
            <header className="row">
                {props.items.map((item, i) => {
                    let conditionalClasses = "";
                    if (item === selectedTab) {
                        conditionalClasses += "bg-dark text-white ";
                    }
                    return (
                        <h2
                            onClick={(event) => {
                                setSelectedTab(item);
                            }}
                            key={i}
                            className={"col-3 py-3 px-5 m-2 border ${conditionalClasses}"}
                        >
                            {item.header}
                        </h2>
                    );
                })}
            </header>
            <div className="row p-3 border mt-3 w-50">
                <p>{selectedTab.content}</p>
            </div>
        </div>
    );
};

export default Tabs;
