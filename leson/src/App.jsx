import React, { useState } from "react";
import "./style.css";
import Btn from "./components/Btn.jsx";
import Text from './components/Text';

const App = () => {
    return <div className="container m-4">
        <Btn color="dark"/>
        <Btn color="success"/>
        <Btn color="outline-danger"/>

        {/* bu componentalar bilan ishlash */}

        <div className="d-flex gap-3 m-5">
            <Text color="danger">
                <h2>Hello World</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolorem! Delectus nihil voluptatibus expedita in ut. Facere corporis exercitationem nobis itaque aperiam autem aliquam pariatur mollitia quibusdam optio, ut velit?
            </Text>
            <Text color="primary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolorem! Delectus nihil voluptatibus expedita in ut. Facere corporis exercitationem nobis itaque aperiam autem aliquam pariatur mollitia quibusdam optio, ut velit?
            </Text>
            <Text color="success">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dolorem! Delectus nihil voluptatibus expedita in ut. Facere corporis exercitationem nobis itaque aperiam autem aliquam pariatur mollitia quibusdam optio, ut velit?
            </Text>
        </div>
    </div>
}

export default App;