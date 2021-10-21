import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import comp from '../../../../Assets/StepsToJoin/comp.png'
// import check from '../../../../Assets/StepsToJoin/check.svg'
import "./Stj.css";


export default function Stj() {
  const [selected, setSelected] = useState(items[0]);
//   const [active, setActive] = useState(false);

  return (
    <div className="Stj">
        <div className="Stj-title">
            <h1>Steps to Join:</h1>
        </div>
        <div className="Stj-container">
            <div>
                <img src={comp} alt="comp" className="Stj-svg" />
            </div>
            <div className="Stj-Steps">
                <AnimateSharedLayout>
                    {items.map(item => (
                    <div className="Stj-item">
                        <Item
                        key={item.id}
                        color="#0099ff"
                        isSelected={selected === item.id}
                        onClick={() => setSelected(item.id)
                        }
                        />
                        <div className="card">
                            <h3>{item.title}</h3>
                            <h5>{item.text}</h5>
                        </div>
                    </div>
                    ))}
                </AnimateSharedLayout>
            </div>
        </div>
    </div>
  );
}

function Item({ color, isSelected, onClick }) {
  return (
    <li
     className="item" onClick={onClick} style={{ backgroundColor: color }}>
      {isSelected && (
        <motion.div
          layoutId="outline"
          className="outline"
          initial={false}
          animate={{ borderColor: color }}
          transition={spring}
        >
        </motion.div>
      )}
    </li>
  );
}

const items = [
    {
        id: 1,
        title: "Sign-Up",
        text: "Signup and create your profile. Fill in all the required information.",
        active: true
    },
    {
        id: 2,
        title: "Selection Assignment",
        text: "Solve and submit the test as per instructions.",
        active: false
    },
    {
        id: 3,
        title: " Verification",
        text: "Verify your PAN & other documents",
        active: false
    },
    {
        id: 4,
        title: "Interview",
        text: "Start Earning Congratulations! Start working and earning.",
        active: false
    }
];


const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30
};

