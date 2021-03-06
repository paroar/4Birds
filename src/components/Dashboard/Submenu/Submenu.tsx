import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';
import firebase from './../../../config/base';

type SubmenuProps = {
    name: string;
    path: string;
    index: number;
    active?: string;
    clicked?: React.ReactEventHandler
}


const Submenu: React.FC = () => {
    const [isActive, setIsActive] = useState(1);

    const handleActive = (index: number) => {
        setIsActive(
            index
        )
    }

    const SubmenuTab: React.FC<SubmenuProps> = (props) => {
        return (
            <li className={`submenu-links__li`}
            style={{
                transition: "all 3s ease"
            }} 
>
                <Link 
                    to={`/${props.path}`} 
                    className={`${isActive === props.index ? "active" : ""}`}
                    onClick={() => handleActive(props.index)}
                >
                    {props.name}
                </Link>
            </li>
        )
    }
    
    return (
        <div className="submenu-wrapper">
            <ul
            className={"submenu-links"}
            >
                <SubmenuTab
                    name={"Lists"}
                    path={"/dashboard"}
                    index={1}

                />
                <SubmenuTab
                    name={"Settings"}
                    path={"/dashboard"}
                    index={2}
                />
            <li className={`submenu-links__li`} style={{float: 'right'}} onClick={() => firebase.auth().signOut()}>
                <FaPowerOff />
            </li>
            </ul> 
        </div>
    )
}

export default Submenu;