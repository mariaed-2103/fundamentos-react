import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome="Júlia Dias Mendes" idade={19} nerd={true} />
            <DiretaFilho nome="Kaike Elias" idade={18} nerd={false} />
        </div>
    )
}