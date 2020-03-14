import React, { useContext} from "react";
import { Config as Configuration } from "../../../DevTools";

import { Container, Input } from "./styles";

export default function Property({context, value}: amy) {
    const { toggleContextValue } = useContext(Configuration);

    const [editing, setEditing] = useState(!value);

    return (
        <Container>
            <div>
                {(value && (
                    <>
                        <label>{value}</label>
                    </>
                )) || (
                    <Input defaultValue={value} autoFocus={true} onKeyUp={keyHandler} name={value}/>
                )}
            </div>
        </Container>
    )

}